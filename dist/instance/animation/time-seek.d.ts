import { Node } from './node';
import { PlaybackInfo, NodeTimeInfo } from "./blend";
import { AnimationNodeTimeSeek } from '../types/gen';
export declare class TimeSeek extends Node {
    seek_pos_request: number;
    constructor(properties: AnimationNodeTimeSeek, name: string);
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
