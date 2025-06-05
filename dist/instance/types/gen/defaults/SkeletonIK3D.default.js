/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultSkeletonModifier3D } from './SkeletonModifier3D.default';
export function DefaultSkeletonIK3D(item) {
    DefaultSkeletonModifier3D(item);
    //interpolation
    item.magnet ?? (item.magnet = create.Vector3(0, 0, 0));
    item.max_iterations ?? (item.max_iterations = 10);
    item.min_distance ?? (item.min_distance = 0.01);
    item.override_tip_basis ?? (item.override_tip_basis = true);
    item.root_bone ?? (item.root_bone = "");
    item.target ?? (item.target = create.Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0));
    item.target_node ?? (item.target_node = create.NodePath(""));
    item.tip_bone ?? (item.tip_bone = "");
    item.use_magnet ?? (item.use_magnet = false);
}
