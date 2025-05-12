import { Transform3D } from "@phoenixillusion/godot-scene-reader/parse/binary/variant.js";
import { MeshLibrary } from "./mesh-library";
import { V3Like } from "./type";
import { MaterialType } from "./material";
import { MeshType } from "./mesh";
import { ShapeType } from "./shape3d";
import { PhysicsMaterial } from "./physics-material";

export interface Node3D {
  transform: Transform3D
}

export interface GridMapNode extends Node3D {
  cell_center_x: boolean;
  cell_center_y: boolean;
  cell_center_z: boolean;
  cell_octant_size: number;
  cell_scale: number;
  collision_layer: number;
  collision_mask: number;
  collision_priority: number;
  cell_size: V3Like;
  data: { cells: Int32Array }
  mesh_library: { 'type': 'MeshLibrary', properties: MeshLibrary };
  physics_material: PhysicsMaterial;
}
export interface HasSurfaceMaterialOverride extends Record<string, unknown> {
  [key: `surface_material_override/${number}`]: MaterialType | undefined;
}
type GodotNodeProperties = {
  Area3D: {} & Node3D;
  CharacterBody3D: {} & Node3D;
  MeshInstance3D: { mesh: MeshType } & HasSurfaceMaterialOverride & Node3D;
  Node: Node3D;
  Node3D: Node3D;
  RigidBody3D: Node3D;
  Skeleton3D: Node3D;
  GridMap: GridMapNode;
  CollisionShape3D: { shape: ShapeType, disabled: boolean } & Node3D;
}
type GodotNodeNames = keyof GodotNodeProperties;

export type GodotNodeTypeMap = {
  [K in GodotNodeNames]: { type: K; properties: GodotNodeProperties[K] };
};
export type Node = GodotNodeTypeMap;
export type GodotNodeType = GodotNodeTypeMap[keyof GodotNodeTypeMap];