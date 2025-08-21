import { DefaultNode2D } from './Node2D.default.js';
export function DefaultLightOccluder2D(item) {
    DefaultNode2D(item);
    //occluder
    item.occluder_light_mask ?? (item.occluder_light_mask = 1);
    item.sdf_collision ?? (item.sdf_collision = true);
}
