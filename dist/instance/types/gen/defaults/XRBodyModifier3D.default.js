import { DefaultSkeletonModifier3D } from './SkeletonModifier3D.default.js';
export function DefaultXRBodyModifier3D(item) {
    DefaultSkeletonModifier3D(item);
    item.body_tracker ?? (item.body_tracker = "/user/body_tracker");
    item.body_update ?? (item.body_update = 7);
    item.bone_update ?? (item.bone_update = 0);
}
