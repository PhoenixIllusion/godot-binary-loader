import { DefaultNode2D } from './Node2D.default.js';
export function DefaultPathFollow2D(item) {
    DefaultNode2D(item);
    item.cubic_interp ?? (item.cubic_interp = true);
    item.h_offset ?? (item.h_offset = 0.0);
    item.loop ?? (item.loop = true);
    item.progress ?? (item.progress = 0.0);
    item.progress_ratio ?? (item.progress_ratio = 0.0);
    item.rotates ?? (item.rotates = true);
    item.v_offset ?? (item.v_offset = 0.0);
}
