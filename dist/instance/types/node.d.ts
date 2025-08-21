import { MaterialType, MeshType, Node3D, NodeType, PhysicsMaterial, Shape3DType } from "./gen/index.js";
import { GridMap as GridMapT } from "@phoenixillusion/godot-scene-reader/process/scene/grid_map.js";
export interface GridMap extends Node3D, GridMapT<MeshType, Shape3DType> {
    physics_material: PhysicsMaterial;
}
interface NodeExtProperties {
    GridMap: GridMap;
}
type NodeExtNames = keyof NodeExtProperties;
export type NodeExtTypeMap = {
    [K in NodeExtNames]: {
        type: K;
        properties: NodeExtProperties[K];
    };
};
export type NodeExtType = NodeExtTypeMap[keyof NodeExtTypeMap] | NodeType;
export interface HasSurfaceMaterialOverride extends Record<string, unknown> {
    [key: `surface_material_override/${number}`]: MaterialType | undefined;
}
export {};
