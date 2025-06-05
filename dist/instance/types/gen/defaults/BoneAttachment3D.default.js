import { DefaultNode3D } from './Node3D.default';
export function DefaultBoneAttachment3D(item) {
    DefaultNode3D(item);
    item.bone_idx ?? (item.bone_idx = -1);
    item.bone_name ?? (item.bone_name = "");
    item.override_pose ?? (item.override_pose = false);
}
