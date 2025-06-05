/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultSkeletonModification2D } from './SkeletonModification2D.default';
export function DefaultSkeletonModification2DCCDIK(item) {
    DefaultSkeletonModification2D(item);
    item.ccdik_data_chain_length ?? (item.ccdik_data_chain_length = 0);
    item.target_nodepath ?? (item.target_nodepath = create.NodePath(""));
    item.tip_nodepath ?? (item.tip_nodepath = create.NodePath(""));
}
