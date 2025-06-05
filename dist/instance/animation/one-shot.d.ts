import { AnimationNodeOneShot, Curve } from '../types/gen';
import { NodeTimeInfo, PlaybackInfo } from './blend';
import { SyncNode } from './sync';
export declare class OneShot extends SyncNode {
    autorestart: boolean;
    autorestart_delay: number;
    autorestart_random_delay: number;
    break_loop_at_end: boolean;
    fadein_curve?: {
        type: "Curve";
        properties: Curve;
    };
    fadein_time: number;
    fadeout_curve?: {
        type: "Curve";
        properties: Curve;
    };
    fadeout_time: number;
    mix_mode: AnimationNodeOneShot.MixMode;
    active: boolean;
    request: AnimationNodeOneShot.OneShotRequest;
    fade_in_remaining: number;
    fade_out_remaining: number;
    time_to_restart: number;
    internal_active: boolean;
    source_names: string[];
    constructor(properties: AnimationNodeOneShot, name: string);
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
