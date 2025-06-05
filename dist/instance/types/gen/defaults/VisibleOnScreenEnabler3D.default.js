/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisibleOnScreenNotifier3D } from './VisibleOnScreenNotifier3D.default';
export function DefaultVisibleOnScreenEnabler3D(item) {
    DefaultVisibleOnScreenNotifier3D(item);
    item.enable_mode ?? (item.enable_mode = 0);
    item.enable_node_path ?? (item.enable_node_path = create.NodePath(".."));
}
