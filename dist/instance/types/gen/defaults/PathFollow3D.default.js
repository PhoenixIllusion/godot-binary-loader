import { DefaultNode3D } from './Node3D.default';
export function DefaultPathFollow3D(item) {
    DefaultNode3D(item);
    item.cubic_interp ?? (item.cubic_interp = true);
    item.h_offset ?? (item.h_offset = 0.0);
    item.loop ?? (item.loop = true);
    item.progress ?? (item.progress = 0.0);
    item.progress_ratio ?? (item.progress_ratio = 0.0);
    item.rotation_mode ?? (item.rotation_mode = 3);
    item.tilt_enabled ?? (item.tilt_enabled = true);
    item.use_model_front ?? (item.use_model_front = false);
    item.v_offset ?? (item.v_offset = 0.0);
}
