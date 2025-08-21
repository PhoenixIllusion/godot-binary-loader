/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisibleOnScreenNotifier2D } from './VisibleOnScreenNotifier2D.default.js';
export function DefaultVisibleOnScreenEnabler2D(item) {
    DefaultVisibleOnScreenNotifier2D(item);
    item.enable_mode ?? (item.enable_mode = 0);
    item.enable_node_path ?? (item.enable_node_path = create.NodePath(".."));
}
