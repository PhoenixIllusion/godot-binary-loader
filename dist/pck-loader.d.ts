import { cTexFile } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
import { BinResource } from "@phoenixillusion/godot-scene-reader/parse/binary/resource.js";
import { PckFile } from "@phoenixillusion/godot-scene-reader/pck/parser.js";
import { PackedScene } from "@phoenixillusion/godot-scene-reader/process/scene/packed_scene.js";
import { ProjectSettingsI } from "./instance/types/project_settings";
export type PckResources = Record<string, BinResource | cTexFile>;
export type PckScenes = Record<string, PackedScene>;
interface LoadRequest {
    path: string;
    resolve_scene?: string | null;
    allowed_extensions?: string[];
    buffer?: ArrayBuffer;
    worker_count?: number;
}
interface LoadResponse {
    projectName: string;
    settings: ProjectSettingsI | null;
    resolved_scene: string | null;
    scenes: PckScenes;
    resources: PckResources;
}
export declare class PckLoader {
    private pack;
    allowed_extensions: string[];
    worker_count: number;
    current_worker: number;
    workers: Worker[];
    worker_results: Record<string, (result: BinResource | cTexFile | BinResource | undefined) => void>;
    constructor(pack: PckFile);
    private remapPath;
    private resolvePath;
    private resourceCache;
    private sceneCache;
    getExternalScene(path: string): PackedScene | undefined;
    getExternal<T extends BinResource | cTexFile>(path: string): T | undefined;
    private queue_worker_task;
    try_open_bin_resource(res_path: string, arrayBuffer: ArrayBuffer, p_no_resource: boolean, p_keep_uuid_paths: boolean): Promise<BinResource>;
    try_open_ctex(arrayBuffer: ArrayBuffer): Promise<cTexFile>;
    try_open_ctex3d(arrayBuffer: ArrayBuffer): Promise<cTexFile>;
    private cacheResource;
    private resolveFile;
    resolve(path: string): Promise<{
        type: string;
        uid: bigint;
        script_class: string;
        string_map: Record<number, string>;
        internal_entries: import("@phoenixillusion/godot-scene-reader").InternalResourceEntry[];
        res_path: string;
        using_named_scene_ids: boolean;
        internal_resources: import("@phoenixillusion/godot-scene-reader").IntResource[];
        internal_index_cache: Record<string, import("@phoenixillusion/godot-scene-reader").VariantType>;
        external_resources: import("@phoenixillusion/godot-scene-reader").ExtResource[];
        remaps: Record<string, string>;
    } | cTexFile | null | undefined>;
    static load(request: LoadRequest): Promise<LoadResponse>;
    static loadWithWorker(request: LoadRequest): Promise<LoadResponse>;
}
export {};
