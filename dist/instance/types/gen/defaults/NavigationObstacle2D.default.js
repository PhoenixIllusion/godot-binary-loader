/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default';
export function DefaultNavigationObstacle2D(item) {
    DefaultNode2D(item);
    item.affect_navigation_mesh ?? (item.affect_navigation_mesh = false);
    item.avoidance_enabled ?? (item.avoidance_enabled = true);
    item.avoidance_layers ?? (item.avoidance_layers = 1);
    item.carve_navigation_mesh ?? (item.carve_navigation_mesh = false);
    item.radius ?? (item.radius = 0.0);
    item.velocity ?? (item.velocity = create.Vector2(0, 0));
    item.vertices ?? (item.vertices = create.PackedVector2Array());
}
