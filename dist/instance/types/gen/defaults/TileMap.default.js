import { DefaultNode2D } from './Node2D.default';
export function DefaultTileMap(item) {
    DefaultNode2D(item);
    item.collision_animatable ?? (item.collision_animatable = false);
    item.collision_visibility_mode ?? (item.collision_visibility_mode = 0);
    item.navigation_visibility_mode ?? (item.navigation_visibility_mode = 0);
    item.rendering_quadrant_size ?? (item.rendering_quadrant_size = 16);
    //tile_set  
}
