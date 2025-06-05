import { BlendShapeMode } from "@phoenixillusion/godot-scene-reader/process/scene/mesh/mesh_types.js";
import { MaterialType, MeshProperties, MeshType } from "./gen";
import { Surface } from "@phoenixillusion/godot-scene-reader/process/scene/mesh/mesh.js";
export declare function MeshWithDefaults<T extends MeshType>(mesh: T): T;
export declare class Mesh {
    name: string;
    blend_shape_mode: BlendShapeMode;
    surfaces: Surface<MaterialType>[];
    constructor(properties: MeshProperties['ArrayMesh']);
}
