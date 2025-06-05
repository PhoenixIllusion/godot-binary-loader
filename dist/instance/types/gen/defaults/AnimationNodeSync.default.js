import { DefaultAnimationNode } from './AnimationNode.default';
export function DefaultAnimationNodeSync(item) {
    DefaultAnimationNode(item);
    item.sync ?? (item.sync = false);
}
