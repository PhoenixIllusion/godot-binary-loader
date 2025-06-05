import { DefaultSkeletonModifier3D } from './SkeletonModifier3D.default';
export function DefaultXRHandModifier3D(item) {
    DefaultSkeletonModifier3D(item);
    item.bone_update ?? (item.bone_update = 0);
    item.hand_tracker ?? (item.hand_tracker = "/user/hand_tracker/left");
}
