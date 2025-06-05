/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisualInstance3D } from './VisualInstance3D.default';
export function DefaultVisibleOnScreenNotifier3D(item) {
    DefaultVisualInstance3D(item);
    item.aabb ?? (item.aabb = create.AABB(-1, -1, -1, 2, 2, 2));
}
