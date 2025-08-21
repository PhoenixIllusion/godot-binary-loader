import { Node } from './node.js';
import { PlaybackInfo, NodeTimeInfo } from "./blend.js";
import { AnimationNodeOutput } from '../types/gen/index.js';
export declare class Output extends Node {
    constructor(properties: AnimationNodeOutput, name: string);
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
