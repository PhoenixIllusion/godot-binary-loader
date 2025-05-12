import { Vector3 } from "@phoenixillusion/godot-scene-reader/parse/binary/variant.js";
import { _get_array_from_surface } from "@phoenixillusion/godot-scene-reader/process/scene/mesh/mesh_get_arrays.js"

export interface Shape3D {
  margin: number;
  custom_solver_bias: number;
}

export interface ShapeProperties {
  BoxShape3D: { size: Vector3 } & Shape3D;
  CapsuleShape3D: { height: number, radius: number } & Shape3D;
  ConcavePolygonShape3D: { data: Vector3[] } & Shape3D;
  ConvexPolygonShape3D: { points: Vector3[] } & Shape3D;
  CylinderShape3D: { height: number, radius: number } & Shape3D;
  HeightMapShape3D: { map_data: Float32Array, map_depth: number, map_height: number } & Shape3D;
  SeparationRayShape3D: { length: number, slide_on_slope: boolean } & Shape3D;
  SphereShape3D: { radius: number } & Shape3D;
}
type ShapeTypeNames = keyof ShapeProperties;
export type ShapeTypeMap = {
  [K in ShapeTypeNames]: { type: K; properties: ShapeProperties[K] };
}
export type ShapeType = ShapeTypeMap[keyof ShapeTypeMap];
