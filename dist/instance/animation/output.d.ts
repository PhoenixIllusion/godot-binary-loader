import { Node } from './node';
import { PlaybackInfo, NodeTimeInfo } from "./blend";
import { AnimationNodeOutput } from '../types/gen';
export declare class Output extends Node {
    constructor(properties: AnimationNodeOutput, name: string);
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
