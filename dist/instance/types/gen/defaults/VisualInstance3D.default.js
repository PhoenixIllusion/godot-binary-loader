import { DefaultNode3D } from './Node3D.default';
export function DefaultVisualInstance3D(item) {
    DefaultNode3D(item);
    item.layers ?? (item.layers = 1);
    item.sorting_offset ?? (item.sorting_offset = 0.0);
    //sorting_use_aabb_center  
}
