/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default';
export function DefaultTileMapLayer(item) {
    DefaultNode2D(item);
    item.collision_enabled ?? (item.collision_enabled = true);
    item.collision_visibility_mode ?? (item.collision_visibility_mode = 0);
    item.enabled ?? (item.enabled = true);
    item.navigation_enabled ?? (item.navigation_enabled = true);
    item.navigation_visibility_mode ?? (item.navigation_visibility_mode = 0);
    item.occlusion_enabled ?? (item.occlusion_enabled = true);
    item.rendering_quadrant_size ?? (item.rendering_quadrant_size = 16);
    item.tile_map_data ?? (item.tile_map_data = create.PackedByteArray());
    //tile_set
    item.use_kinematic_bodies ?? (item.use_kinematic_bodies = false);
    item.x_draw_order_reversed ?? (item.x_draw_order_reversed = false);
    item.y_sort_origin ?? (item.y_sort_origin = 0);
}
