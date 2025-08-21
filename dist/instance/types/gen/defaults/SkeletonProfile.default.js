import { DefaultResource } from './Resource.default.js';
export function DefaultSkeletonProfile(item) {
    DefaultResource(item);
    item.bone_size ?? (item.bone_size = 0);
    item.group_size ?? (item.group_size = 0);
    item.root_bone ?? (item.root_bone = "");
    item.scale_base_bone ?? (item.scale_base_bone = "");
}
