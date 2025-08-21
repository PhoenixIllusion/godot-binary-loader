import { DefaultNode3D } from './Node3D.default.js';
export function DefaultSpringArm3D(item) {
    DefaultNode3D(item);
    item.collision_mask ?? (item.collision_mask = 1);
    item.margin ?? (item.margin = 0.01);
    //shape
    item.spring_length ?? (item.spring_length = 1.0);
}
