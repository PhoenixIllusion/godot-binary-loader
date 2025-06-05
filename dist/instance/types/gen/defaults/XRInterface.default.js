import { DefaultRefCounted } from './RefCounted.default';
export function DefaultXRInterface(item) {
    DefaultRefCounted(item);
    item.ar_is_anchor_detection_enabled ?? (item.ar_is_anchor_detection_enabled = false);
    item.environment_blend_mode ?? (item.environment_blend_mode = 0);
    item.interface_is_primary ?? (item.interface_is_primary = false);
    item.xr_play_area_mode ?? (item.xr_play_area_mode = 0);
}
