import { TrackType } from "@phoenixillusion/godot-scene-reader/process/scene/animation.js";
import { quat, vec3 } from "gl-matrix";
import { SceneInstance } from "../scene";
import { Skeleton3DInstance } from "../skeleton";
import { NodePath } from "../types/gen/types";
export declare class TrackCache {
    root_motion: boolean;
    setup_pass: number;
    type: TrackType;
    path: NodePath;
    path_str: string;
    blend_idx: number;
    object_id: SceneInstance.Node | null;
    total_weight: number;
}
export declare class TrackCacheTransform extends TrackCache {
    type: TrackType;
    loc_used: boolean;
    rot_used: boolean;
    scale_used: boolean;
    readonly init_loc: vec3;
    readonly init_rot: import("gl-matrix").vec4;
    readonly init_scale: vec3;
    readonly loc: vec3;
    readonly rot: quat;
    readonly scale: vec3;
    bone_idx: Skeleton3DInstance.Bone | null;
    skeleton_id: Skeleton3DInstance | null;
}
export declare class TrackCacheValue extends TrackCache {
    type: TrackType;
    init_value: any;
    value: any;
    subpath: string[];
    is_init: boolean;
    use_continuous: boolean;
    use_discrete: boolean;
    is_using_angle: boolean;
    is_variant_interpolatable: boolean;
}
export declare class TrackCacheMethod extends TrackCache {
    type: TrackType;
}
export declare class TrackCacheBlendShape extends TrackCache {
    type: TrackType;
    value: number;
    init_value: number;
}
export declare class TrackCacheAudio extends TrackCache {
    type: TrackType;
}
export declare class TrackCacheAnimation extends TrackCache {
}
export declare class RootMotion {
    readonly loc: vec3;
    readonly rot: import("gl-matrix").vec4;
    readonly scale: vec3;
}
