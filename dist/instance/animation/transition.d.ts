import { PlaybackInfo, NodeTimeInfo } from "./blend";
import { AnimationNodeTransition, ResourceTypeMap } from '../types/gen';
import { SyncNode } from './sync';
interface TransitionState {
    name: string;
    break_loop_at_end: boolean;
    auto_advance: boolean;
    reset: boolean;
}
export declare class Transition extends SyncNode {
    allow_transition_to_self: boolean;
    xfade_time: number;
    xfade_curve?: ResourceTypeMap['Curve'];
    input_data: TransitionState[];
    input_index: Record<string, number>;
    current_state: string;
    prev_index: number;
    current_index: number;
    prev_xfading: number;
    xfade_time_remaining: number;
    transition_request: string;
    pending_update: boolean;
    constructor(properties: AnimationNodeTransition, name: string);
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
export {};
