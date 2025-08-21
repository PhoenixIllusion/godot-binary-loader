/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode3D } from './Node3D.default.js';
export function DefaultImporterMeshInstance3D(item) {
    DefaultNode3D(item);
    item.cast_shadow ?? (item.cast_shadow = 1);
    item.layer_mask ?? (item.layer_mask = 1);
    //mesh
    item.skeleton_path ?? (item.skeleton_path = create.NodePath(""));
    //skin
    item.visibility_range_begin ?? (item.visibility_range_begin = 0.0);
    item.visibility_range_begin_margin ?? (item.visibility_range_begin_margin = 0.0);
    item.visibility_range_end ?? (item.visibility_range_end = 0.0);
    item.visibility_range_end_margin ?? (item.visibility_range_end_margin = 0.0);
    item.visibility_range_fade_mode ?? (item.visibility_range_fade_mode = 0);
}
