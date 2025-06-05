import { DefaultNode2D } from './Node2D.default';
export function DefaultCollisionObject2D(item) {
    DefaultNode2D(item);
    item.collision_layer ?? (item.collision_layer = 1);
    item.collision_mask ?? (item.collision_mask = 1);
    item.collision_priority ?? (item.collision_priority = 1.0);
    item.disable_mode ?? (item.disable_mode = 0);
    item.input_pickable ?? (item.input_pickable = true);
}
