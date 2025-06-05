
import { Object3D } from 'three/src/core/Object3D.js';
import { Quaternion } from 'three/src/math/Quaternion.js';
import { Vector3 } from 'three/src/math/Vector3.js';
import Jolt from './jolt-import';
import { loadJolt } from './jolt-import';
import { Area3DData, CharacterBody3DData, PhysicsShapeData, RigidBody3DData, StaticBodyData } from './physics';
import { Scene } from 'three/src/scenes/Scene.js';
import { MeshPhongMaterial } from 'three/src/materials/MeshPhongMaterial.js';
import { BoxGeometry } from 'three/src/geometries/BoxGeometry.js';
import { Mesh } from 'three/src/objects/Mesh.js';
import { SphereGeometry } from 'three/src/geometries/SphereGeometry.js';
import { CapsuleGeometry } from 'three/src/geometries/CapsuleGeometry.js';
import { CylinderGeometry } from 'three/src/geometries/CylinderGeometry.js';
import { BufferAttribute } from 'three/src/core/BufferAttribute.js';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import type { Shape3DType } from '@phoenixillusion/godot-binary-loader/instance/types/gen/index.js';
import { Matrix4 } from 'three/src/math/Matrix4.js';
import { DefaultBoxShape3D } from '@phoenixillusion/godot-binary-loader/instance/types/gen/defaults/BoxShape3D.default.js';
import { DefaultSphereShape3D } from '@phoenixillusion/godot-binary-loader/instance/types/gen/defaults/SphereShape3D.default.js';
import { DefaultCapsuleShape3D } from '@phoenixillusion/godot-binary-loader/instance/types/gen/defaults/CapsuleShape3D.default.js';



// Physics variables
// List of objects spawned

export interface JoltPhysics {
  jolt: Jolt.JoltInterface;
  physicsSystem: Jolt.PhysicsSystem;
  bodyInterface: Jolt.BodyInterface;
  dynamicObjects: Object3D[];
}

const RENDER_COLLISION = 1;

// The update function
const wrapVec3 = (v: Jolt.Vec3, vec = new Vector3) => { vec.set(v.GetX(), v.GetY(), v.GetZ()); return vec; }
const unwrapVec3 = (v: Vector3, vec = new Jolt.Vec3()) => { vec.Set(v.x, v.y, v.z); return vec; }
const wrapRVec3 = (v: Jolt.RVec3, vec = new Vector3) => { vec.set(v.GetX(), v.GetY(), v.GetZ()); return vec; }
const unwrapRVec3 = (v: Vector3, vec = new Jolt.RVec3()) => { vec.Set(v.x, v.y, v.z); return vec; }
const wrapQuat = (q: Jolt.Quat, quat = new Quaternion) => { quat.set(q.GetX(), q.GetY(), q.GetZ(), q.GetW()); return quat; }
const unwrapQuat = (q: Quaternion, quat = new Jolt.Quat()) => { quat.Set(q.x, q.y, q.z, q.w); return quat; }

const unwrapFloat3 = (v: Vector3, float3 = new Jolt.Float3(v.x, v.y, v.z)) => { float3.x = v.x; float3.y = v.y; float3.z = v.z; return float3 }

// Object layers
const LAYER_NON_MOVING = 0;
const LAYER_MOVING = 1;
const NUM_OBJECT_LAYERS = 2;

function setupCollisionFiltering(settings: Jolt.JoltSettings) {
  // Layer that objects can be in, determines which other objects it can collide with
  // Typically you at least want to have 1 layer for moving bodies and 1 layer for static bodies, but you can have more
  // layers if you want. E.g. you could have a layer for high detail collision (which is not used by the physics simulation
  // but only if you do collision testing).
  let objectFilter = new Jolt.ObjectLayerPairFilterTable(NUM_OBJECT_LAYERS);
  objectFilter.EnableCollision(LAYER_NON_MOVING, LAYER_MOVING);
  objectFilter.EnableCollision(LAYER_MOVING, LAYER_MOVING);

  // Each broadphase layer results in a separate bounding volume tree in the broad phase. You at least want to have
  // a layer for non-moving and moving objects to avoid having to update a tree full of static objects every frame.
  // You can have a 1-on-1 mapping between object layers and broadphase layers (like in this case) but if you have
  // many object layers you'll be creating many broad phase trees, which is not efficient.
  const BP_LAYER_NON_MOVING = new Jolt.BroadPhaseLayer(0);
  const BP_LAYER_MOVING = new Jolt.BroadPhaseLayer(1);
  const NUM_BROAD_PHASE_LAYERS = 2;
  let bpInterface = new Jolt.BroadPhaseLayerInterfaceTable(NUM_OBJECT_LAYERS, NUM_BROAD_PHASE_LAYERS);
  bpInterface.MapObjectToBroadPhaseLayer(LAYER_NON_MOVING, BP_LAYER_NON_MOVING);
  bpInterface.MapObjectToBroadPhaseLayer(LAYER_MOVING, BP_LAYER_MOVING);

  settings.mObjectLayerPairFilter = objectFilter;
  settings.mBroadPhaseLayerInterface = bpInterface;
  settings.mObjectVsBroadPhaseLayerFilter = new Jolt.ObjectVsBroadPhaseLayerFilterTable(settings.mBroadPhaseLayerInterface, NUM_BROAD_PHASE_LAYERS, settings.mObjectLayerPairFilter, NUM_OBJECT_LAYERS);
};

export async function initPhysics(): Promise<JoltPhysics> {
  await loadJolt({});

  // Initialize Jolt
  const settings = new Jolt.JoltSettings();
  settings.mMaxWorkerThreads = 3; // Limit the number of worker threads to 3 (for a total of 4 threads working on the simulation). Note that this value will always be clamped against the number of CPUs in the system - 1.
  setupCollisionFiltering(settings);
  const jolt = new Jolt.JoltInterface(settings);
  Jolt.destroy(settings);
  const physicsSystem = jolt.GetPhysicsSystem();
  const bodyInterface = physicsSystem.GetBodyInterface();
  return {
    jolt, physicsSystem, bodyInterface, dynamicObjects: []
  }
}

const pos_update = {
  matrix: new Matrix4(),
  inv_matrix: new Matrix4(),
  position: new Vector3(),
  scale: new Vector3(1, 1, 1),
  quaternion: new Quaternion()
}
export function updatePhysics(jolt: JoltPhysics, deltaTime: number) {

  // Update object transforms
  for (let i = 0, il = jolt.dynamicObjects.length; i < il; i++) {
    let obj = jolt.dynamicObjects[i];
    let body = obj.userData.body;
    const { matrix, inv_matrix, position, scale, quaternion } = pos_update;
    wrapVec3(body.GetPosition(), position);
    wrapQuat(body.GetRotation(), quaternion);
    matrix.compose(position, quaternion, scale);
    if (obj.parent) {
      obj.parent.updateWorldMatrix(true, false);
      inv_matrix.copy(obj.parent.matrixWorld).invert();
      inv_matrix.multiply(matrix).decompose(obj.position, obj.quaternion, obj.scale);
    }
  }

  // When running below 55 Hz, do 2 steps instead of 1
  var numSteps = deltaTime > 1.0 / 55.0 ? 2 : 1;
  // Step the physics world
  jolt.jolt.Step(deltaTime, numSteps);
}

function addToScene(scene: Scene, jolt: JoltPhysics, body: Jolt.Body, color: number, motionType: Jolt.EMotionType, existingBody?: Object3D) {
  jolt.bodyInterface.AddBody(body.GetID(), Jolt.EActivation_Activate);

  let threeObject = existingBody;
  if (RENDER_COLLISION && !existingBody) {
    threeObject = getThreeObjectForBody(body, color);
    scene.add(threeObject);
  }

  if (threeObject && (motionType == Jolt.EMotionType_Dynamic || motionType == Jolt.EMotionType_Kinematic)) {
    threeObject.userData.body = body;
    threeObject.userData.inv_matrix = threeObject.matrix.invert();
    jolt.dynamicObjects.push(threeObject);
  }
}


function createJoltShape(shape: Shape3DType, v3: Jolt.Vec3): Jolt.ShapeSettings | null {

  switch (shape.type) {
    case 'BoxShape3D': {
      const p = shape.properties;
      DefaultBoxShape3D(p);
      v3.Set(p.size.x / 2, p.size.y / 2, p.size.z / 2)
      return new Jolt.BoxShapeSettings(v3, 0.05);
    };
    case 'ConcavePolygonShape3D': {
      const p = shape.properties;
      if ('data' in p) {
        const data = p.data as Vector3[];
        const triangles = new Jolt.TriangleList;
        triangles.resize(data.length / 3);
        let triangle_idx = 0;
        for (let i = 0; i < data.length; i += 3) {
          const tri = triangles.at(triangle_idx++);
          unwrapFloat3(data[i], tri.get_mV(0));
          unwrapFloat3(data[i + 2], tri.get_mV(1));
          unwrapFloat3(data[i + 1], tri.get_mV(2));
        }
        const materials = new Jolt.PhysicsMaterialList;
        const j_shape = new Jolt.MeshShapeSettings(triangles, materials);
        Jolt.destroy(triangles);
        Jolt.destroy(materials);
        return j_shape;
      }
    } break;
    case 'ConvexPolygonShape3D': {
      const p = shape.properties;
      const j_shape = new Jolt.ConvexHullShapeSettings;
      p.points.forEach(v => {
        j_shape.mPoints.push_back(unwrapVec3(<Vector3>v));
      })
      return j_shape;
    };
    case 'SphereShape3D': {
      const p = shape.properties;
      DefaultSphereShape3D(p);
      return new Jolt.SphereShapeSettings(p.radius);
    }
    case 'CapsuleShape3D': {
      const p = shape.properties;
      DefaultCapsuleShape3D(p);
      return new Jolt.CapsuleShapeSettings(p.height / 2 - p.radius, p.radius)
    }
    default:
      debugger;
  }
  return null;
}

const three_pos = new Vector3();
const three_quat = new Quaternion();
const three_scale = new Vector3();

function decomposeMatrix(matrix: Matrix4, position: Jolt.Vec3 | Jolt.RVec3, rotation: Jolt.Quat) {
  matrix.decompose(three_pos, three_quat, three_scale);
  position.Set(three_pos.x, three_pos.y, three_pos.z);
  unwrapQuat(three_quat, rotation);
}

function createShape(shapes: PhysicsShapeData[], position: Jolt.Vec3, rotation: Jolt.Quat, scale: Jolt.Vec3, _tmp: Jolt.Vec3): Jolt.ShapeSettings | null {

  let j_shape: Jolt.ShapeSettings | null = null;
  if (shapes.length == 1) {
    const shape = shapes[0];
    j_shape = createJoltShape(shape.shape, _tmp);
    shape.matrix.decompose(three_pos, three_quat, three_scale);
    if (j_shape && three_scale.x != 1.0) {
      unwrapVec3(three_scale, scale);
      j_shape = new Jolt.ScaledShapeSettings(j_shape, scale);
    }
  }
  if (shapes.length > 0) {
    const shapeSettings = new Jolt.StaticCompoundShapeSettings();
    shapes.forEach(shape => {
      decomposeMatrix(shape.matrix, position, rotation);
      let j_shape = createJoltShape(shape.shape, _tmp);
      if (j_shape && three_scale.x != 1.0) {
        unwrapVec3(three_scale, scale);
        j_shape = new Jolt.ScaledShapeSettings(j_shape, scale);
      }
      if (j_shape)
        shapeSettings.AddShape(position, rotation, j_shape, 0)
    });
    j_shape = shapeSettings;
  }
  return j_shape;
}

export function createRigidBody(jolt: JoltPhysics, scene: Scene, data: RigidBody3DData): void {
  const v3 = new Jolt.Vec3();
  const r_position = new Jolt.RVec3();
  const position = new Jolt.Vec3();
  const scale = new Jolt.Vec3();
  const rotation = new Jolt.Quat();


  data.node.updateWorldMatrix(true, false);
  const root = data.node.matrixWorld.clone();
  const j_shape = createShape(data.shapes, position, rotation, scale, v3);
  if (j_shape) {
    root.decompose(three_pos, three_quat, three_scale);
    unwrapRVec3(three_pos, r_position);
    unwrapQuat(three_quat, rotation);
    const creationSettings = new Jolt.BodyCreationSettings(j_shape.Create().Get(), r_position, rotation, Jolt.EMotionType_Dynamic, LAYER_MOVING);
    let DOF = Jolt.EAllowedDOFs_All;
    if (data.properties.axis_lock_angular_x)
      DOF ^= Jolt.EAllowedDOFs_RotationX;
    if (data.properties.axis_lock_angular_y)
      DOF ^= Jolt.EAllowedDOFs_RotationY;
    if (data.properties.axis_lock_angular_z)
      DOF ^= Jolt.EAllowedDOFs_RotationZ;
    if (data.properties.axis_lock_linear_x)
      DOF ^= Jolt.EAllowedDOFs_TranslationX;
    if (data.properties.axis_lock_linear_y)
      DOF ^= Jolt.EAllowedDOFs_TranslationY;
    if (data.properties.axis_lock_linear_z)
      DOF ^= Jolt.EAllowedDOFs_TranslationZ;
    creationSettings.set_mAllowedDOFs(DOF);
    const body = jolt.bodyInterface.CreateBody(creationSettings);
    Jolt.destroy(creationSettings);
    addToScene(scene, jolt, body, 0x66ff66, Jolt.EMotionType_Dynamic, data.node);
  }
  Jolt.destroy(v3);
  Jolt.destroy(r_position);
  Jolt.destroy(position);
  Jolt.destroy(scale);
  Jolt.destroy(rotation);
}


export function createArea3DBody(jolt: JoltPhysics, scene: Scene, data: Area3DData): void {
  const v3 = new Jolt.Vec3();
  const r_position = new Jolt.RVec3();
  const position = new Jolt.Vec3();
  const scale = new Jolt.Vec3();
  const rotation = new Jolt.Quat();


  data.node.updateWorldMatrix(true, false);
  const root = data.node.matrixWorld.clone();
  const j_shape = createShape(data.shapes, position, rotation, scale, v3);
  if (j_shape) {
    root.decompose(three_pos, three_quat, three_scale);
    unwrapRVec3(three_pos, r_position);
    unwrapQuat(three_quat, rotation);
    const creationSettings = new Jolt.BodyCreationSettings(j_shape.Create().Get(), r_position, rotation, Jolt.EMotionType_Static, LAYER_MOVING);
    creationSettings.mIsSensor = true;
    const body = jolt.bodyInterface.CreateBody(creationSettings);
    Jolt.destroy(creationSettings);
    addToScene(scene, jolt, body, 0xff0000, Jolt.EMotionType_Static);
  }
  Jolt.destroy(v3);
  Jolt.destroy(r_position);
  Jolt.destroy(position);
  Jolt.destroy(scale);
  Jolt.destroy(rotation);
}

export function createStaticBody(jolt: JoltPhysics, scene: Scene, data: StaticBodyData): void {
  const v3 = new Jolt.Vec3();
  const r_position = new Jolt.RVec3();
  const position = new Jolt.Vec3();
  const scale = new Jolt.Vec3();
  const rotation = new Jolt.Quat();

  data.shapes.forEach(shape => {
    let j_shape = createJoltShape(shape.shape, v3)
    if (data.root_transforms.length > 0) {
      const root = data.root_transforms[0].clone().multiply(shape.matrix);
      root.decompose(three_pos, three_quat, three_scale);
      if (j_shape && three_scale.x != 1.0) {
        unwrapVec3(three_scale, scale);
        j_shape = new Jolt.ScaledShapeSettings(j_shape, scale);
      }
    }
    data.root_transforms.forEach(transform => {
      if (j_shape) {
        const root = transform.clone().multiply(shape.matrix);
        root.decompose(three_pos, three_quat, three_scale);
        unwrapRVec3(three_pos, r_position);
        unwrapQuat(three_quat, rotation);
        const creationSettings = new Jolt.BodyCreationSettings(j_shape.Create().Get(), r_position, rotation, Jolt.EMotionType_Static, LAYER_NON_MOVING);
        const body = jolt.bodyInterface.CreateBody(creationSettings);
        Jolt.destroy(creationSettings);
        addToScene(scene, jolt, body, 0xFF00FF, Jolt.EMotionType_Static);
      }
    })
  });

  Jolt.destroy(v3);
  Jolt.destroy(r_position);
  Jolt.destroy(position);
  Jolt.destroy(scale);
  Jolt.destroy(rotation);
}

function createMeshForShape(shape: Jolt.Shape) {
  // Get triangle data
  let scale = new Jolt.Vec3(1, 1, 1);
  let triContext = new Jolt.ShapeGetTriangles(shape, Jolt.AABox.prototype.sBiggest(), shape.GetCenterOfMass(), Jolt.Quat.prototype.sIdentity(), scale);
  Jolt.destroy(scale);

  // Get a view on the triangle data (does not make a copy)
  let vertices = new Float32Array(Jolt.HEAPF32.buffer, triContext.GetVerticesData(), triContext.GetVerticesSize() / Float32Array.BYTES_PER_ELEMENT);

  // Now move the triangle data to a buffer and clone it so that we can free the memory from the C++ heap (which could be limited in size)
  let buffer = new BufferAttribute(vertices, 3).clone();
  Jolt.destroy(triContext);

  // Create a three mesh
  let geometry = new BufferGeometry();
  geometry.setAttribute('position', buffer);
  geometry.computeVertexNormals();

  return geometry;
}

interface GetBodyLike {
  GetPosition(): Jolt.RVec3,
  GetRotation(): Jolt.Quat,
  GetShape(): Jolt.Shape
}

const materials: Record<number, MeshPhongMaterial> = {}
function getThreeObjectForBody(body: GetBodyLike, color: number) {
  const see_through = false;
  let material = materials[color] || new MeshPhongMaterial({ color: color, wireframe: true, depthTest: !see_through, depthWrite: !see_through });
  materials[color] = material;
  let threeObject;

  let shape = body.GetShape();
  switch (shape.GetSubType()) {
    case Jolt.EShapeSubType_Box:
      let boxShape = Jolt.castObject(shape, Jolt.BoxShape);
      let extent = wrapVec3(boxShape.GetHalfExtent()).multiplyScalar(2);
      threeObject = new Mesh(new BoxGeometry(extent.x, extent.y, extent.z, 1, 1, 1), material);
      break;
    case Jolt.EShapeSubType_Sphere:
      let sphereShape = Jolt.castObject(shape, Jolt.SphereShape);
      threeObject = new Mesh(new SphereGeometry(sphereShape.GetRadius(), 32, 32), material);
      break;
    case Jolt.EShapeSubType_Capsule:
      let capsuleShape = Jolt.castObject(shape, Jolt.CapsuleShape);
      threeObject = new Mesh(new CapsuleGeometry(capsuleShape.GetRadius(), 2 * capsuleShape.GetHalfHeightOfCylinder(), 20, 10), material);
      break;
    case Jolt.EShapeSubType_Cylinder:
      let cylinderShape = Jolt.castObject(shape, Jolt.CylinderShape);
      threeObject = new Mesh(new CylinderGeometry(cylinderShape.GetRadius(), cylinderShape.GetRadius(), 2 * cylinderShape.GetHalfHeight(), 20, 1), material);
      break;
    default:
      threeObject = new Mesh(createMeshForShape(shape), material);
      break;
  }

  wrapRVec3(body.GetPosition(), threeObject.position);
  wrapQuat(body.GetRotation(), threeObject.quaternion);

  return threeObject;
}

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
    const {shape, matrix } = data.shapes[0];
    const shapeSettings = createJoltShape(shape, _tmpVec3)!;
    if('height' in shape.properties) {
      characterRadiusStanding = shape.properties.height / 2;
    } else if ('size' in shape.properties){
      const { y } = shape.properties.size;
      characterRadiusStanding = y/2;
    } else if ('radius' in shape.properties){
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
  if(allowSliding) {}
  data.node.add(getThreeObjectForBody(character, 0xFFFFFF));
  return { prePhysicsUpdate, handleInput, character }
}