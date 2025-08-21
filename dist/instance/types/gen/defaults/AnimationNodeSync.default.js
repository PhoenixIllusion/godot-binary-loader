import { DefaultAnimationNode } from './AnimationNode.default.js';
export function DefaultAnimationNodeSync(item) {
    DefaultAnimationNode(item);
    item.sync ?? (item.sync = false);
}
