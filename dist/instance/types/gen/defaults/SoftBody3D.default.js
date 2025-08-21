/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultMeshInstance3D } from './MeshInstance3D.default.js';
export function DefaultSoftBody3D(item) {
    DefaultMeshInstance3D(item);
    item.collision_layer ?? (item.collision_layer = 1);
    item.collision_mask ?? (item.collision_mask = 1);
    item.damping_coefficient ?? (item.damping_coefficient = 0.01);
    item.disable_mode ?? (item.disable_mode = 0);
    item.drag_coefficient ?? (item.drag_coefficient = 0.0);
    item.linear_stiffness ?? (item.linear_stiffness = 0.5);
    item.parent_collision_ignore ?? (item.parent_collision_ignore = create.NodePath(""));
    item.pressure_coefficient ?? (item.pressure_coefficient = 0.0);
    item.ray_pickable ?? (item.ray_pickable = true);
    item.simulation_precision ?? (item.simulation_precision = 5);
    item.total_mass ?? (item.total_mass = 1.0);
}
