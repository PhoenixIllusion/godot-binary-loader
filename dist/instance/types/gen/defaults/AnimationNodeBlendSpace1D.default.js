import { DefaultAnimationRootNode } from './AnimationRootNode.default.js';
export function DefaultAnimationNodeBlendSpace1D(item) {
    DefaultAnimationRootNode(item);
    item.blend_mode ?? (item.blend_mode = 0);
    item.max_space ?? (item.max_space = 1.0);
    item.min_space ?? (item.min_space = -1.0);
    item.snap ?? (item.snap = 0.1);
    item.sync ?? (item.sync = false);
    item.value_label ?? (item.value_label = "value");
}
