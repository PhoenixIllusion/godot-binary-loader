

import { Vector3 } from 'three/src/math/Vector3.js';
import Jolt from './jolt-import';
import { CharacterBody3DData } from './physics';
import { createJoltShape, decomposeMatrix, getThreeObjectForBody, JoltPhysics, LAYER_MOVING, wrapQuat, wrapRVec3, wrapVec3 } from './jolt-physics';



export function buildCharacter(physics: JoltPhysics, data: CharacterBody3DData) {

  const { jolt, physicsSystem } = physics;

  const upRotationX = 0;
  const upRotationZ = 0;

  let characterRadiusStanding = 1;

  const charSettings = data.properties;

  // Character movement properties
  const controlMovementDuringJump = true;					///< If false the character cannot change movement direction in mid air
  const characterSpeed = 3.0;
  const jumpSpeed = 10.0;

  const enableCharacterInertia = true;

  const maxSlopeAngle = charSettings.floor_max_angle;

  const maxStrength = 100.0;
  const characterPadding = 0.02;
  const penetrationRecoverySpeed = 1.0;
  const predictiveContactDistance = 0.1;
  const enableWalkStairs = true;
  const enableStickToFloor = true;

  const updateSettings = new Jolt.ExtendedUpdateSettings();

  const objectVsBroadPhaseLayerFilter = jolt.GetObjectVsBroadPhaseLayerFilter();
  const objectLayerPairFilter = jolt.GetObjectLayerPairFilter();

  const movingBPFilter = new Jolt.DefaultBroadPhaseLayerFilter(objectVsBroadPhaseLayerFilter, LAYER_MOVING);
  const movingLayerFilter = new Jolt.DefaultObjectLayerFilter(objectLayerPairFilter, LAYER_MOVING);
  const bodyFilter = new Jolt.BodyFilter();
  const shapeFilter = new Jolt.ShapeFilter();

  const _tmpQuat = new Jolt.Quat();
  const _tmpVec3 = new Jolt.Vec3();

  let desiredVelocity = new Vector3();
  let allowSliding = false;

  const characterUp = new Vector3().copy(charSettings.up_direction);

  const old_position = new Vector3();
  const new_position = new Vector3();
  const prePhysicsUpdate = (deltaTime: number) => {
    if (!enableStickToFloor) {
      updateSettings.mStickToFloorStepDown = Jolt.Vec3.prototype.sZero();
    } else {
      const vec = characterUp.clone().multiplyScalar(-updateSettings.mStickToFloorStepDown.Length());
      updateSettings.mStickToFloorStepDown.Set(vec.x, vec.y, vec.z);
    }

    if (!enableWalkStairs) {
      updateSettings.mWalkStairsStepUp = Jolt.Vec3.prototype.sZero();
    } else {
      const vec = characterUp.clone().multiplyScalar(updateSettings.mWalkStairsStepUp.Length());
      updateSettings.mWalkStairsStepUp.Set(vec.x, vec.y, vec.z);
    }
    characterUp.multiplyScalar(-physicsSystem.GetGravity().Length());

    wrapRVec3(character.GetPosition(), old_position)
    character.ExtendedUpdate(deltaTime,
      character.GetUp(),
      updateSettings,
      movingBPFilter,
      movingLayerFilter,
      bodyFilter,
      shapeFilter,
      jolt.GetTempAllocator());
    wrapRVec3(character.GetPosition(), new_position)
    data.node.position.copy(new_position);
    return { old_position, new_position }
  }


  function initShape() {
    const { shape, matrix } = data.shapes[0];
    const shapeSettings = createJoltShape(shape, _tmpVec3)!;
    if ('height' in shape.properties) {
      characterRadiusStanding = shape.properties.height / 2;
    } else if ('size' in shape.properties) {
      const { y } = shape.properties.size;
      characterRadiusStanding = y / 2;
    } else if ('radius' in shape.properties) {
      characterRadiusStanding = shape.properties.radius;
    }
    decomposeMatrix(matrix, _tmpVec3, _tmpQuat);
    const settings = new Jolt.RotatedTranslatedShapeSettings(_tmpVec3, _tmpQuat, shapeSettings);
    return settings.Create().Get();
  }

  const settings = new Jolt.CharacterVirtualSettings();
  settings.mMass = 1000;
  settings.mMaxSlopeAngle = maxSlopeAngle;
  settings.mMaxStrength = maxStrength;
  settings.mShape = initShape();
  settings.mBackFaceMode = Jolt.EBackFaceMode_CollideWithBackFaces;
  settings.mCharacterPadding = characterPadding;
  settings.mPenetrationRecoverySpeed = penetrationRecoverySpeed;
  settings.mPredictiveContactDistance = predictiveContactDistance;
  settings.mSupportingVolume = new Jolt.Plane(Jolt.Vec3.prototype.sAxisY(), -characterRadiusStanding);
  const character = new Jolt.CharacterVirtual(settings, Jolt.RVec3.prototype.sZero(), Jolt.Quat.prototype.sIdentity(), physicsSystem);

  const handleInput = (movementDirection: Vector3, jump: boolean, deltaTime: number) => {
    const playerControlsHorizontalVelocity = controlMovementDuringJump || character.IsSupported();
    if (playerControlsHorizontalVelocity) {
      // True if the player intended to move
      allowSliding = !(movementDirection.length() < 1.0e-12);
      // Smooth the player input
      if (enableCharacterInertia) {
        desiredVelocity.multiplyScalar(0.75).add(movementDirection.multiplyScalar(0.25 * characterSpeed))
      } else {
        desiredVelocity.copy(movementDirection).multiplyScalar(characterSpeed);
      }
    } else {
      // While in air we allow sliding
      allowSliding = true;
    }
    _tmpVec3.Set(upRotationX, 0, upRotationZ);
    const characterUpRotation = Jolt.Quat.prototype.sEulerAngles(_tmpVec3);
    character.SetUp(characterUpRotation.RotateAxisY());
    character.SetRotation(characterUpRotation);
    const upRotation = wrapQuat(characterUpRotation);

    character.UpdateGroundVelocity();
    const characterUp = wrapVec3(character.GetUp());
    const linearVelocity = wrapVec3(character.GetLinearVelocity());
    const currentVerticalVelocity = characterUp.clone().multiplyScalar(linearVelocity.dot(characterUp));
    const groundVelocity = wrapVec3(character.GetGroundVelocity());
    const gravity = wrapVec3(physicsSystem.GetGravity());

    let newVelocity;
    const movingTowardsGround = (currentVerticalVelocity.y - groundVelocity.y) < 0.1;
    if (character.GetGroundState() == Jolt.EGroundState_OnGround					// If on ground
      && (enableCharacterInertia ?
        movingTowardsGround													// Inertia enabled: And not moving away from ground
        : !character.IsSlopeTooSteep(character.GetGroundNormal())))			// Inertia disabled: And not on a slope that is too steep
    {
      // Assume velocity of ground when on ground
      newVelocity = groundVelocity;

      // Jump
      if (jump && movingTowardsGround)
        newVelocity.add(characterUp.multiplyScalar(jumpSpeed));
    }
    else
      newVelocity = currentVerticalVelocity.clone();

    // Gravity
    newVelocity.add(gravity.multiplyScalar(deltaTime).applyQuaternion(upRotation));

    if (playerControlsHorizontalVelocity) {
      // Player input
      newVelocity.add(desiredVelocity.clone().applyQuaternion(upRotation));
    } else {
      // Preserve horizontal velocity
      const currentHorizontalVelocity = linearVelocity.sub(currentVerticalVelocity);
      newVelocity.add(currentHorizontalVelocity);
    }

    _tmpVec3.Set(newVelocity.x, newVelocity.y, newVelocity.z);
    character.SetLinearVelocity(_tmpVec3);
  }
  if (allowSliding) { }
  data.node.add(getThreeObjectForBody(character, 0xFFFFFF));
  return { prePhysicsUpdate, handleInput, character }
}