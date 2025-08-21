import { DefaultAnimationRootNode } from './AnimationRootNode.default.js';
export function DefaultAnimationNodeAnimation(item) {
    DefaultAnimationRootNode(item);
    item.animation ?? (item.animation = "");
    //loop_mode
    item.play_mode ?? (item.play_mode = 0);
    //start_offset
    //stretch_time_scale
    //timeline_length
    item.use_custom_timeline ?? (item.use_custom_timeline = false);
}
