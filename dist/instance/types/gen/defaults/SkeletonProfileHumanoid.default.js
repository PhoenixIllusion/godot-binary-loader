import { DefaultSkeletonProfile } from './SkeletonProfile.default.js';
export function DefaultSkeletonProfileHumanoid(item) {
    DefaultSkeletonProfile(item);
    item.bone_size ?? (item.bone_size = 56);
    item.group_size ?? (item.group_size = 4);
    item.root_bone ?? (item.root_bone = "Root");
    item.scale_base_bone ?? (item.scale_base_bone = "Hips");
}
