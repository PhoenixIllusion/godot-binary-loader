import { Color } from "@phoenixillusion/godot-scene-reader/parse/binary/variant.js";
import { _get_array_from_surface } from "@phoenixillusion/godot-scene-reader/process/scene/mesh/mesh_get_arrays.js"
import { cTexFile } from "@phoenixillusion/godot-scene-reader";

export interface BaseMaterial3D {
  albedo_color?: Color,
  albedo_texture?: { type: 'ctex', value: cTexFile }
  roughness?: number,
  roughness_texture?: { type: 'ctex', value: cTexFile }
}
export interface MaterialProperties {
  BaseMaterial3D: BaseMaterial3D,
  StandardMaterial3D: BaseMaterial3D
}
type MaterialTypeNames = keyof MaterialProperties;
export type MaterialTypeMap = {
  [K in MaterialTypeNames]: { type: K; properties: MaterialProperties[K] };
}
export type MaterialType = MaterialTypeMap[keyof MaterialTypeMap];
