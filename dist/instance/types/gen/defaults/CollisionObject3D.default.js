import { DefaultNode3D } from './Node3D.default.js';
export function DefaultCollisionObject3D(item) {
    DefaultNode3D(item);
    item.collision_layer ?? (item.collision_layer = 1);
    item.collision_mask ?? (item.collision_mask = 1);
    item.collision_priority ?? (item.collision_priority = 1.0);
    item.disable_mode ?? (item.disable_mode = 0);
    item.input_capture_on_drag ?? (item.input_capture_on_drag = false);
    item.input_ray_pickable ?? (item.input_ray_pickable = true);
}
