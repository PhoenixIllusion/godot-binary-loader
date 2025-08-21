import { Quaternion } from "three/src/math/Quaternion.js";
import { InputDirection, setupInput } from "./input";
import { JoltPhysics } from "../three-loader/jolt-physics";
import { Camera } from "three/src/cameras/Camera.js";
import { Vector3 } from "three/src/math/Vector3.js";
import { CharacterBody3DData, Vehicle3DData } from "../three-loader/physics";
import { buildCharacter } from "../three-loader/jolt-character3d";
import { Scene } from "three/src/scenes/Scene.js";
import { buildVehicle } from "../three-loader/jolt-vehiclde3d";
import { DirectionalLight } from "three/src/lights/DirectionalLight.js";

export function createCharacter3D(camera: Camera, charData: CharacterBody3DData, jolt: JoltPhysics) {
  const input = setupInput();
  const cameraRotation = new Quaternion();
  const character = buildCharacter(jolt, charData)
  camera.position.copy(charData.node.position);
  camera.position.z += 5;
  camera.position.y += 10;
  const updatePlayer = (tick: number) => {
    camera.getWorldQuaternion(cameraRotation);
    let forward = input.forwardPressed ? 1.0 : (input.backwardPressed ? -1.0 : 0.0);
    let right = input.rightPressed ? 1.0 : (input.leftPressed ? -1.0 : 0.0);
    const cameraDirectionV = new Vector3(right, 0, -forward).applyQuaternion(cameraRotation);
    cameraDirectionV.y = 0;
    cameraDirectionV.normalize().multiplyScalar(2);
    character.handleInput(cameraDirectionV, input.space, tick);
    character.prePhysicsUpdate(tick)
    //const { old_position, new_position } = character.prePhysicsUpdate(tick)
  }
  return updatePlayer;
}

export function createVehicle(scene: Scene, jolt: JoltPhysics, vehicle: Vehicle3DData, wireInput: boolean) {
  const input: InputDirection = wireInput ? setupInput(): {} as InputDirection;
  const control = buildVehicle(scene, jolt, vehicle)
  const updatePlayer = (tick: number) => {
    control?.handleInput(input);
  }
  var dirLight = new DirectionalLight(0xffffff, 1);
  dirLight.position.set(10, 10, 5);
  scene.add(dirLight);
  return updatePlayer;
}