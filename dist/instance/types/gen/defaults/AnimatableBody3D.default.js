import { DefaultStaticBody3D } from './StaticBody3D.default.js';
export function DefaultAnimatableBody3D(item) {
    DefaultStaticBody3D(item);
    item.sync_to_physics ?? (item.sync_to_physics = true);
}
