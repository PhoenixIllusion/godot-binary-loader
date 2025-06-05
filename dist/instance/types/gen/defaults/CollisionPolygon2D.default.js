/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default';
export function DefaultCollisionPolygon2D(item) {
    DefaultNode2D(item);
    item.build_mode ?? (item.build_mode = 0);
    item.disabled ?? (item.disabled = false);
    item.one_way_collision ?? (item.one_way_collision = false);
    item.one_way_collision_margin ?? (item.one_way_collision_margin = 1.0);
    item.polygon ?? (item.polygon = create.PackedVector2Array());
}
