/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultSkeletonModification2D } from './SkeletonModification2D.default';
export function DefaultSkeletonModification2DLookAt(item) {
    DefaultSkeletonModification2D(item);
    item.bone2d_node ?? (item.bone2d_node = create.NodePath(""));
    item.bone_index ?? (item.bone_index = -1);
    item.target_nodepath ?? (item.target_nodepath = create.NodePath(""));
}
