import { DefaultNode3D } from './Node3D.default';
export function DefaultSkeleton3D(item) {
    DefaultNode3D(item);
    item.animate_physical_bones ?? (item.animate_physical_bones = true);
    item.modifier_callback_mode_process ?? (item.modifier_callback_mode_process = 1);
    item.motion_scale ?? (item.motion_scale = 1.0);
    item.show_rest_only ?? (item.show_rest_only = false);
}
