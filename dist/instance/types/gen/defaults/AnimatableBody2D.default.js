import { DefaultStaticBody2D } from './StaticBody2D.default.js';
export function DefaultAnimatableBody2D(item) {
    DefaultStaticBody2D(item);
    item.sync_to_physics ?? (item.sync_to_physics = true);
}
