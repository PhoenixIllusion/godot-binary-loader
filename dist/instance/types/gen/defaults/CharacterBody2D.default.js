/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultPhysicsBody2D } from './PhysicsBody2D.default.js';
export function DefaultCharacterBody2D(item) {
    DefaultPhysicsBody2D(item);
    item.floor_block_on_wall ?? (item.floor_block_on_wall = true);
    item.floor_constant_speed ?? (item.floor_constant_speed = false);
    item.floor_max_angle ?? (item.floor_max_angle = 0.785398);
    item.floor_snap_length ?? (item.floor_snap_length = 1.0);
    item.floor_stop_on_slope ?? (item.floor_stop_on_slope = true);
    item.max_slides ?? (item.max_slides = 4);
    item.motion_mode ?? (item.motion_mode = 0);
    item.platform_floor_layers ?? (item.platform_floor_layers = 4294967295);
    item.platform_on_leave ?? (item.platform_on_leave = 0);
    item.platform_wall_layers ?? (item.platform_wall_layers = 0);
    item.safe_margin ?? (item.safe_margin = 0.08);
    item.slide_on_ceiling ?? (item.slide_on_ceiling = true);
    item.up_direction ?? (item.up_direction = create.Vector2(0, -1));
    item.velocity ?? (item.velocity = create.Vector2(0, 0));
    item.wall_min_slide_angle ?? (item.wall_min_slide_angle = 0.261799);
}
