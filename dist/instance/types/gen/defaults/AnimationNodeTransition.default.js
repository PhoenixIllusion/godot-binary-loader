import { DefaultAnimationNodeSync } from './AnimationNodeSync.default.js';
export function DefaultAnimationNodeTransition(item) {
    DefaultAnimationNodeSync(item);
    item.allow_transition_to_self ?? (item.allow_transition_to_self = false);
    item.input_count ?? (item.input_count = 0);
    //xfade_curve
    item.xfade_time ?? (item.xfade_time = 0.0);
}
