
import { Object3D } from "three/src/core/Object3D.js";
import { Area3D, CharacterBody3D, RigidBody3D, Shape3DType, StaticBody3D } from "../loader/instance/types/gen";
import { Matrix4 } from "three/src/math/Matrix4.js";

export interface PhysicsShapeData {
  matrix: Matrix4, shape: Shape3DType
}

export interface StaticBodyData {
  properties: StaticBody3D, root_transforms: Matrix4[], shapes: PhysicsShapeData[] 
}

export interface PhysicsBodyData<T> {
  properties: T, node: Object3D, shapes: PhysicsShapeData[]
}

export interface RigidBody3DData extends PhysicsBodyData<RigidBody3D>{}
export interface CharacterBody3DData extends PhysicsBodyData<CharacterBody3D> {}
export interface Area3DData extends PhysicsBodyData<Area3D> {}

export interface PhysicsData {
    character3d_bodies: CharacterBody3DData[]
    rigid_bodies: RigidBody3DData[],
    static_bodies: StaticBodyData[],
    areas: Area3DData[]
}

export function DefaultPhysicsData(): PhysicsData {
  return { character3d_bodies: [], rigid_bodies: [], static_bodies: [], areas: [] }
}
