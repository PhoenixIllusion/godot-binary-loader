import { Node } from './node.js';
import { PlaybackInfo, NodeTimeInfo } from "./blend.js";
import { AnimationNodeTimeSeek } from '../types/gen/index.js';
export declare class TimeSeek extends Node {
    seek_pos_request: number;
    constructor(properties: AnimationNodeTimeSeek, name: string);
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
