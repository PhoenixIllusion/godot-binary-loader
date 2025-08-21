/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultSkeletonModification2D } from './SkeletonModification2D.default.js';
export function DefaultSkeletonModification2DJiggle(item) {
    DefaultSkeletonModification2D(item);
    item.damping ?? (item.damping = 0.75);
    item.gravity ?? (item.gravity = create.Vector2(0, 6));
    item.jiggle_data_chain_length ?? (item.jiggle_data_chain_length = 0);
    item.mass ?? (item.mass = 0.75);
    item.stiffness ?? (item.stiffness = 3.0);
    item.target_nodepath ?? (item.target_nodepath = create.NodePath(""));
    item.use_gravity ?? (item.use_gravity = false);
}
