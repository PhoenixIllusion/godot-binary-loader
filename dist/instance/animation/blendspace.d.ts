import { SyncNode } from "./sync";
import { Node } from './node';
import { NonAbstractAnimationNodeType } from "./index";
export interface BlendPointRaw<T> {
    node: NonAbstractAnimationNodeType;
    pos: T;
}
export interface BlendPoint<T> {
    node: Node;
    pos: T;
}
export declare abstract class BlendSpace<T> extends SyncNode {
    blend_points: BlendPoint<T>[];
    max_space: T;
    min_space: T;
    snap: T;
}
export declare function convertRaw<T>(_in: BlendPointRaw<T>, prefix: string, idx: number): BlendPoint<T>;
