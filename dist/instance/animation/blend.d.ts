import { Node } from './node';
import { Animation } from '../types/gen/index';
export declare const _pi: typeof clonePlaybackInfo;
export declare const enum FilterAction {
    FILTER_IGNORE = 0,
    FILTER_PASS = 1,
    FILTER_STOP = 2,
    FILTER_BLEND = 3
}
export interface NodeState {
    track_weights: Float32Array;
}
export declare class NodeTimeInfo {
    length: number;
    position: number;
    delta: number;
    loop_mode: Animation.LoopMode;
    will_end: boolean;
    is_infinity: boolean;
    is_looping(): boolean;
    get_remain(p_break_loop?: boolean): number;
}
export declare function allocPlaybackInfo(): PlaybackInfo;
export declare function clonePlaybackInfo(source: PlaybackInfo): PlaybackInfo;
export interface PlaybackInfo {
    time: number;
    delta: number;
    start: number;
    end: number;
    seeked: boolean;
    is_external_seeking: boolean;
    looped_flag: Animation.LoopedFlag;
    weight: number;
}
export declare function blend_node($this: Node, p_node: Node, p_playback_info: PlaybackInfo, p_filter: FilterAction, p_sync: boolean): NodeTimeInfo;
