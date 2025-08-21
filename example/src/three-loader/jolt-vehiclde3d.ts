

import { Vector3 } from 'three/src/math/Vector3.js';
import Jolt from './jolt-import';
import { CharacterBody3DData, Vehicle3DData, VehicleWheel3DData } from './physics';
import { addJoltBodyToScene, createJoltShape, createShape, decomposeFromNode, decomposeMatrix, getThreeObjectForBody, JoltPhysics, LAYER_MOVING, RENDER_COLLISION, TILE_MATERIAL, unwrapQuat, unwrapRVec3, unwrapVec3, wrapQuat, wrapRVec3, wrapVec3 } from './jolt-physics';
import { degToRad } from 'three/src/math/MathUtils.js';
import { Quaternion } from 'three/src/math/Quaternion.js';
import { DefaultVehicleWheel3D } from '@phoenixillusion/godot-binary-loader/instance/types/gen/defaults/VehicleWheel3D.default.js';
import { InputDirection } from '../three-render/input';
import { Scene } from 'three/src/scenes/Scene.js';
import { CylinderGeometry } from 'three/src/geometries/CylinderGeometry.js';
import { Mesh } from 'three/src/objects/Mesh.js';
import { MeshPhongMaterial } from 'three/src/materials/MeshPhongMaterial.js';
import { SphereGeometry } from 'three/src/geometries/Geometries.js';
import { DefaultVehicleBody3D } from '@phoenixillusion/godot-binary-loader/instance/types/gen/defaults/VehicleBody3D.default.js';

const FORWARD = new Vector3(0,0,1);
const UP = new Vector3(0,1,0);
const RIGHT = new Vector3(1,0,0);
function sort_wheels(children: VehicleWheel3DData[]) {
  const tires = children.map(child => ({
    child,
    localPosition: child.node.position,
    forwardAmount: child.node.position.dot(FORWARD),
    rightAmount: child.node.position.dot(RIGHT),
  }));

  // Sort by forward position
  tires.sort((a, b) => b.forwardAmount - a.forwardAmount);
  const frontTires = tires.slice(0, 2);
  const rearTires = tires.slice(2, 4);

  // Sort front and rear groups by right position
  frontTires.sort((a, b) => a.rightAmount - b.rightAmount);
  rearTires.sort((a, b) => a.rightAmount - b.rightAmount);

  return {
    frontLeft: frontTires[0].child,
    frontRight: frontTires[1].child,
    backLeft: rearTires[0].child,
    backRight: rearTires[1].child,
  };
}

const FL_WHEEL = 0;
const FR_WHEEL = 1;
const BL_WHEEL = 2;
const BR_WHEEL = 3;

type CastType = 'cylinder'|'sphere'|'ray';

export function buildVehicle(scene: Scene, physics: JoltPhysics, data: Vehicle3DData) {

  const { physicsSystem, bodyInterface } = physics;

  const wheelRight = new Jolt.Vec3(1, 0, 0);
  const wheelUp = new Jolt.Vec3(0, 1, 0);	

  let castType: CastType = 'cylinder' as CastType;
  const wheelWidth = 0.1;
  
  const suspensionMinLength = 0.3;
  const suspensionMaxLength = 0.5;
  const maxSteerAngle = degToRad(30);
  const fourWheelDrive = true;
  const frontBackLimitedSlipRatio = 1.4;
  const leftRightLimitedSlipRatio = 1.4;
  const antiRollbar = true;

  const vehicleMass = 1500.0;
  const maxEngineTorque = 500.0;
  const clutchStrength = 10.0;

  let previousForward = 1.0;
  DefaultVehicleBody3D(data.properties);
  const v3 = new Jolt.Vec3();
  const r_position = new Jolt.RVec3();
  const position = new Jolt.Vec3();
  const scale = new Jolt.Vec3();
  const rotation = new Jolt.Quat();
  const depthMaterial = new MeshPhongMaterial({ color: 0xFFFFFF, wireframe: true, depthTest: false, depthWrite: false });
  const carShapeSettings = createShape(data.shapes, position, rotation, scale, v3);
  if (carShapeSettings) { 
    const carShape = carShapeSettings.Create().Get();
    decomposeFromNode(data.node, r_position, rotation);
    const carBodySettings = new Jolt.BodyCreationSettings(carShape, r_position, rotation, Jolt.EMotionType_Dynamic,
      LAYER_MOVING);
    carBodySettings.mOverrideMassProperties = Jolt.EOverrideMassProperties_CalculateInertia;
    carBodySettings.mMassPropertiesOverride.mMass = vehicleMass;
    const carBody = bodyInterface.CreateBody(carBodySettings);
    addJoltBodyToScene(scene, physics, carBody, 0xFF00FF, Jolt.EMotionType_Dynamic, data.node);
    const threeObject = physics.dynamicObjects[physics.dynamicObjects.length-1];
    const center = new Mesh(new SphereGeometry(0.05, 32, 32), depthMaterial);
    threeObject.add(center);

    const vehicle = new Jolt.VehicleConstraintSettings();
    vehicle.mMaxPitchRollAngle = degToRad(60.0);
    vehicle.mWheels.clear();

    if(data.wheels.length != 4) {
      throw new Error("Vehicle3D implements only 4 wheel vehicles at this time")
    }
    const mapped_wheels = sort_wheels(data.wheels);
    const sortedWheels = [mapped_wheels.frontLeft, mapped_wheels.frontRight, mapped_wheels.backLeft, mapped_wheels.backRight];
    sortedWheels.forEach(wheel_data => {
      const p = wheel_data.properties;
      DefaultVehicleWheel3D(p);
      const wheel_setting = new Jolt.WheelSettingsWV();
      wheel_data.node.position.y -= p.wheel_rest_length/5;
      unwrapVec3(wheel_data.node.position, wheel_setting.mPosition);
      if (p.use_as_steering)
        wheel_setting.mMaxSteerAngle = maxSteerAngle;
      else
        wheel_setting.mMaxSteerAngle = 0;
      wheel_setting.mRadius = p.wheel_radius;
      wheel_setting.mSuspensionMaxLength = p.wheel_rest_length;
      wheel_setting.mSuspensionMinLength = 0.05;
      wheel_setting.mWidth = wheelWidth;
      vehicle.mWheels.push_back(wheel_setting);
      if(RENDER_COLLISION) {
        const wheel = new Mesh(new CylinderGeometry(wheel_setting.mRadius, wheel_setting.mRadius, wheel_setting.mWidth, 20, 1),
          depthMaterial);
        wheel.rotateZ(Math.PI/2)
				wheel_data.node.add(wheel);
      }
    });
    const controllerSettings = new Jolt.WheeledVehicleControllerSettings();
    controllerSettings.mEngine.mMaxTorque = maxEngineTorque;
    controllerSettings.mTransmission.mClutchStrength = clutchStrength;
    vehicle.mController = controllerSettings;

    // Front differential
    controllerSettings.mDifferentials.clear();
    const frontWheelDrive = new Jolt.VehicleDifferentialSettings();
    frontWheelDrive.mLeftWheel = FL_WHEEL;
    frontWheelDrive.mRightWheel = FR_WHEEL;
    frontWheelDrive.mLimitedSlipRatio = leftRightLimitedSlipRatio;
    if (fourWheelDrive)
      frontWheelDrive.mEngineTorqueRatio = 0.5; // Split engine torque when 4WD
    controllerSettings.mDifferentials.push_back(frontWheelDrive);
    controllerSettings.mDifferentialLimitedSlipRatio = frontBackLimitedSlipRatio;

    // Rear differential
			if (fourWheelDrive) {
				const rearWheelDrive = new Jolt.VehicleDifferentialSettings();
				rearWheelDrive.mLeftWheel = BL_WHEEL;
				rearWheelDrive.mRightWheel = BR_WHEEL;
				rearWheelDrive.mLimitedSlipRatio = leftRightLimitedSlipRatio;
				rearWheelDrive.mEngineTorqueRatio = 0.5;
				controllerSettings.mDifferentials.push_back(rearWheelDrive);
			}
      // Anti-roll bars
			if (antiRollbar) {
				vehicle.mAntiRollBars.clear();
				const frontRollBar = new Jolt.VehicleAntiRollBar();
				frontRollBar.mLeftWheel = FL_WHEEL;
				frontRollBar.mRightWheel = FR_WHEEL;
				const rearRollBar = new Jolt.VehicleAntiRollBar();
				rearRollBar.mLeftWheel = BL_WHEEL;
				rearRollBar.mRightWheel = BR_WHEEL;
				vehicle.mAntiRollBars.push_back(frontRollBar);
				vehicle.mAntiRollBars.push_back(rearRollBar);
			}
			const constraint = new Jolt.VehicleConstraint(carBody, vehicle);
      let tester;
			switch (castType) {
				case 'cylinder':
					tester = new Jolt.VehicleCollisionTesterCastCylinder(LAYER_MOVING, 0.05);
					break;
				case 'sphere':
					tester = new Jolt.VehicleCollisionTesterCastSphere(LAYER_MOVING, 0.5 * wheelWidth);
					break;
				default:
					tester = new Jolt.VehicleCollisionTesterRay(LAYER_MOVING);
					break;
			}
			constraint.SetVehicleCollisionTester(tester);
			physicsSystem.AddConstraint(constraint);
			physicsSystem.AddStepListener(new Jolt.VehicleConstraintStepListener(constraint));
			const controller = Jolt.castObject(constraint.GetController(), Jolt.WheeledVehicleController);

      const handleInput = (input: InputDirection) => {
				let forward = 0.0, right = 0.0, brake = 0.0, handBrake = 0.0;

				forward = input.forwardPressed? 1.0 : (input.backwardPressed? -1.0 : 0.0);
				right = input.rightPressed? 1.0 : (input.leftPressed? -1.0 : 0.0);

				if (previousForward * forward < 0.0) {
					const rotation = wrapQuat(carBody.GetRotation().Conjugated());
					const linearV = wrapVec3(carBody.GetLinearVelocity());
					const velocity = linearV.applyQuaternion(rotation).z;
					if ((forward > 0.0 && velocity < -0.1) || (forward < 0.0 && velocity > 0.1)) {
						// Brake while we've not stopped yet
						forward = 0.0;
						brake = 1.0;
					}
					else {
						// When we've come to a stop, accept the new direction
						previousForward = forward;
					}
				}

				if (input.space) {
					forward = 0.0;
					handBrake = 1.0;
				}

				controller.SetDriverInput(forward, right, brake, handBrake);
				if (right != 0.0 || forward != 0.0 || brake != 0.0 || handBrake != 0.0)
					bodyInterface.ActivateBody(carBody.GetID());
        
        for(let i=0; i< data.wheels.length; i++) {
					let transform = constraint.GetWheelLocalTransform(i, wheelRight, wheelUp);
					sortedWheels[i].node.position.copy(wrapVec3(transform.GetTranslation()));
					sortedWheels[i].node.quaternion.copy(wrapQuat(transform.GetRotation().GetQuaternion()));
        }
			}
      return { handleInput }
  }
  return null;
}