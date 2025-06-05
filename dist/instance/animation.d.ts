import { Animation } from "./types/gen";
import { NodePath } from "./types/gen/types";
import type { TrackType } from "@phoenixillusion/godot-scene-reader/process/scene/animation.js";
import { TrackKeys, UpdateMode } from "@phoenixillusion/godot-scene-reader/process/scene/animation.js";
export declare function get_cache_type(p_type: TrackType): TrackType;
export declare function get_cache_type_thash(track: TrackBase): string;
export { TrackType };
interface TrackBase {
    enabled: boolean;
    imported: false;
    interp: Animation.InterpolationType;
    loop_wrap: boolean;
    path: NodePath;
    path_str: string;
    type: TrackType;
    thash: string;
}
export interface TrackWithBuffer extends TrackBase {
    keys: Float32Array;
}
export interface Track extends TrackBase {
    keys: TrackKeys;
    update: UpdateMode;
}
export interface AnimationData extends Animation {
    update: Animation.UpdateMode;
    tracks: (Track | TrackWithBuffer)[];
}
export declare class AnimationInstance {
    name: string;
    length: number;
    loop_mode: Animation.LoopMode;
    step: number;
    tracks: Track[];
    constructor(name: string, data: AnimationData);
}
