import { DefaultNode3D } from './Node3D.default.js';
export function DefaultXROrigin3D(item) {
    DefaultNode3D(item);
    item.current ?? (item.current = false);
    item.world_scale ?? (item.world_scale = 1.0);
}
