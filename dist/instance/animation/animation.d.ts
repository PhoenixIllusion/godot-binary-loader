import { AnimationNodeAnimation, Animation as AnimationT } from "../types/gen";
import { PlaybackInfo, NodeTimeInfo } from "./blend";
import { Node } from './node';
import { AnimationInstance } from "../animation";
export declare class Animation extends Node {
    animation: string;
    loop_mode: AnimationT.LoopMode;
    play_mode: AnimationNodeAnimation.PlayMode;
    start_offset: number;
    stretch_time_scale: boolean;
    timeline_length: number;
    use_custom_timeline: boolean;
    animationInstance: AnimationInstance;
    constructor(properties: AnimationNodeAnimation, name: string);
    get_node_time_info(): NodeTimeInfo;
    _backward: boolean;
    set_backward(v: boolean): void;
    is_backward(): boolean;
    blend_animation(p_playback_info: PlaybackInfo): void;
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
