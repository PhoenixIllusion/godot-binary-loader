/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode3D } from './Node3D.default.js';
export function DefaultShapeCast3D(item) {
    DefaultNode3D(item);
    item.collide_with_areas ?? (item.collide_with_areas = false);
    item.collide_with_bodies ?? (item.collide_with_bodies = true);
    item.collision_mask ?? (item.collision_mask = 1);
    item.collision_result ?? (item.collision_result = []);
    item.debug_shape_custom_color ?? (item.debug_shape_custom_color = create.Color(0, 0, 0, 1));
    item.enabled ?? (item.enabled = true);
    item.exclude_parent ?? (item.exclude_parent = true);
    item.margin ?? (item.margin = 0.0);
    item.max_results ?? (item.max_results = 32);
    //shape
    item.target_position ?? (item.target_position = create.Vector3(0, -1, 0));
}
