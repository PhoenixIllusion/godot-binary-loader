/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode3D } from './Node3D.default';
export function DefaultNavigationObstacle3D(item) {
    DefaultNode3D(item);
    item.affect_navigation_mesh ?? (item.affect_navigation_mesh = false);
    item.avoidance_enabled ?? (item.avoidance_enabled = true);
    item.avoidance_layers ?? (item.avoidance_layers = 1);
    item.carve_navigation_mesh ?? (item.carve_navigation_mesh = false);
    item.height ?? (item.height = 1.0);
    item.radius ?? (item.radius = 0.0);
    item.use_3d_avoidance ?? (item.use_3d_avoidance = false);
    item.velocity ?? (item.velocity = create.Vector3(0, 0, 0));
    item.vertices ?? (item.vertices = create.PackedVector3Array());
}
