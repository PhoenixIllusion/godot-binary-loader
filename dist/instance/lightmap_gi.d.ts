import { SceneInstance } from "./scene";
import { LightmapGI, LightmapGIData } from "./types/gen";
import { NodePath, Rect2 } from "./types/gen/types";
import { cTexFile } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
interface AtlasData {
    path: NodePath;
    rect: Rect2;
    textureIndex: number;
    instanceIndex: number;
}
export declare class LightmapGIDataInstance {
    lightmap_textures: cTexFile[];
    atlasData: AtlasData[];
    constructor(data: LightmapGIData);
}
export declare class LightmapGIInstance {
    node: SceneInstance.Node;
    lightmapGI: LightmapGI;
    lightData: LightmapGIDataInstance;
    constructor(node: SceneInstance.Node);
}
export {};
