import { AnimationNodeBlendTree } from "../types/gen";
import { Node as BaseNode } from './node';
import { Vector2 } from "../types/gen/types";
import { NonAbstractAnimationNodeType } from "./index";
import { NodeTimeInfo, PlaybackInfo } from "./blend";
export interface Node {
    node?: NonAbstractAnimationNodeType;
    position: Vector2;
}
type RepeatingPattern<T extends any[]> = T extends [infer A, infer B, infer C, ...infer Rest] ? [A, B, C, ...RepeatingPattern<Rest>] : [];
export type ConnectionEntry = [string, 0 | 1, string];
export interface Properties {
    nodes: {
        [key: string]: Node;
    };
    node_connections: RepeatingPattern<ConnectionEntry>;
}
export declare class BlendTree extends BaseNode {
    nodeMap: Record<string, BaseNode>;
    constructor(blendTree: AnimationNodeBlendTree, name?: string);
    parameters(parameters: Record<string, any>): void;
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
export {};
