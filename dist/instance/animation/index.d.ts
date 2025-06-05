import { AnimationNodeProperties, AnimationNodeTypeMap } from "../types/gen";
import { Node } from './node';
type ExcludeNodeTypes = 'AnimationNode' | 'AnimationRootNode' | 'AnimationNodeSync';
type NonAbstractAnimationNodes = Exclude<keyof AnimationNodeProperties, ExcludeNodeTypes>;
export type NonAbstractAnimationNodeType = AnimationNodeTypeMap[NonAbstractAnimationNodes];
export declare function create(node: NonAbstractAnimationNodeType, name: string): Node;
export {};
