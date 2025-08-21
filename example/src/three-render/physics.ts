import { Camera } from "three/src/cameras/Camera.js";
import { JoltPhysics, createStaticBody, createRigidBody, createArea3DBody } from "../three-loader/jolt-physics";
import { GodotPck } from "../three-loader/pck-loader";
import { createCharacter3D, createVehicle } from "./createCharacter3D";
import { Scene } from "three/src/scenes/Scene.js";

export function rigPhysics(pck: GodotPck, camera: Camera, scene: Scene, jolt: JoltPhysics, updates: ((_: number) => void)[]) {
  if (pck.physics.character3d_bodies.length) {
    updates.push(createCharacter3D(camera, pck.physics.character3d_bodies[0], jolt));
  }
  if (pck.physics.vehicles.length) {
    updates.push(createVehicle(scene, jolt, pck.physics.vehicles[0], true));
    for(let i=1;i<pck.physics.vehicles.length;i++) {
      updates.push(createVehicle(scene, jolt, pck.physics.vehicles[i], false));
    }
  }
  pck.physics.static_bodies.forEach(x => {
    createStaticBody(jolt, scene, x);
  })
  pck.physics.rigid_bodies.forEach(x => {
    createRigidBody(jolt, scene, x);
  })
  pck.physics.areas.forEach(x => {
    createArea3DBody(jolt, scene, x);
  })
}