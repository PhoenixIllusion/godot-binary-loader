/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default';
export function DefaultShapeCast2D(item) {
    DefaultNode2D(item);
    item.collide_with_areas ?? (item.collide_with_areas = false);
    item.collide_with_bodies ?? (item.collide_with_bodies = true);
    item.collision_mask ?? (item.collision_mask = 1);
    item.collision_result ?? (item.collision_result = []);
    item.enabled ?? (item.enabled = true);
    item.exclude_parent ?? (item.exclude_parent = true);
    item.margin ?? (item.margin = 0.0);
    item.max_results ?? (item.max_results = 32);
    //shape
    item.target_position ?? (item.target_position = create.Vector2(0, 50));
}
