/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultSkeletonModification2D } from './SkeletonModification2D.default';
export function DefaultSkeletonModification2DTwoBoneIK(item) {
    DefaultSkeletonModification2D(item);
    item.flip_bend_direction ?? (item.flip_bend_direction = false);
    item.target_maximum_distance ?? (item.target_maximum_distance = 0.0);
    item.target_minimum_distance ?? (item.target_minimum_distance = 0.0);
    item.target_nodepath ?? (item.target_nodepath = create.NodePath(""));
}
