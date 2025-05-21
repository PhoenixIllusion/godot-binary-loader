
import { Object3D } from "three/src/core/Object3D.js";
import { RigidBody3D, Shape3DType, StaticBody3D } from "../loader/instance/types/gen";
import { Matrix4 } from "three/src/math/Matrix4.js";

export interface PhysicsShapeData {
  matrix: Matrix4, shape: Shape3DType
}

export interface StaticBodyData {
  properties: StaticBody3D, root_transforms: Matrix4[], shapes: PhysicsShapeData[] 
}
export interface RigidBodyData {
  properties: RigidBody3D, node: Object3D, shapes: PhysicsShapeData[]
}

export interface PhysicsData {
    rigid_bodies: RigidBodyData[],
    static_bodies: StaticBodyData[]
}

export function DefaultPhysicsData() {
  return { rigid_bodies: [], static_bodies: [] }
}
