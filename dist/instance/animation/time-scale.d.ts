import { Node } from './node';
import { PlaybackInfo, NodeTimeInfo } from "./blend";
import { AnimationNodeTimeScale } from '../types/gen';
export declare class TimeScale extends Node {
    scale: number;
    constructor(properties: AnimationNodeTimeScale, name: string);
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
