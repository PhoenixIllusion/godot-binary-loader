import { AnimationNodeAdd2, AnimationNodeAdd3, AnimationNodeBlend2, AnimationNodeBlend3, AnimationNodeSub2 } from '../types/gen';
import { PlaybackInfo, NodeTimeInfo } from './blend';
import { Node } from './node';
export declare abstract class SyncNode extends Node {
    sync: boolean;
}
export declare abstract class BlendNode extends SyncNode {
    blend_amount: number;
}
export declare abstract class AddNode extends SyncNode {
    add_amount: number;
}
export declare abstract class SubNode extends SyncNode {
    sub_amount: number;
}
export declare class Add2 extends AddNode {
    source_names: string[];
    constructor(properties: AnimationNodeAdd2, name: string);
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
export declare class Add3 extends AddNode {
    source_names: string[];
    constructor(properties: AnimationNodeAdd3, name: string);
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
export declare class Blend2 extends BlendNode {
    source_names: string[];
    constructor(properties: AnimationNodeBlend2, name: string);
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
export declare class Blend3 extends BlendNode {
    source_names: string[];
    constructor(properties: AnimationNodeBlend3, name: string);
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
export declare class Sub2 extends SubNode {
    sub_amount: number;
    source_names: string[];
    constructor(properties: AnimationNodeSub2, name: string);
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
