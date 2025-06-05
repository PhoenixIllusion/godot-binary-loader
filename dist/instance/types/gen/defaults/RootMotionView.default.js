/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisualInstance3D } from './VisualInstance3D.default';
export function DefaultRootMotionView(item) {
    DefaultVisualInstance3D(item);
    item.animation_path ?? (item.animation_path = create.NodePath(""));
    item.cell_size ?? (item.cell_size = 1.0);
    item.color ?? (item.color = create.Color(0.5, 0.5, 1, 1));
    item.radius ?? (item.radius = 10.0);
    item.zero_y ?? (item.zero_y = true);
}
