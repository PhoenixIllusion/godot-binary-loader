/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode3D } from './Node3D.default.js';
export function DefaultRemoteTransform3D(item) {
    DefaultNode3D(item);
    item.remote_path ?? (item.remote_path = create.NodePath(""));
    item.update_position ?? (item.update_position = true);
    item.update_rotation ?? (item.update_rotation = true);
    item.update_scale ?? (item.update_scale = true);
    item.use_global_coordinates ?? (item.use_global_coordinates = true);
}
