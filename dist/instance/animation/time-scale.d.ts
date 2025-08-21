import { Node } from './node.js';
import { PlaybackInfo, NodeTimeInfo } from "./blend.js";
import { AnimationNodeTimeScale } from '../types/gen/index.js';
export declare class TimeScale extends Node {
    scale: number;
    constructor(properties: AnimationNodeTimeScale, name: string);
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
