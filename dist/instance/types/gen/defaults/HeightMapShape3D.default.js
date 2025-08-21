/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultShape3D } from './Shape3D.default.js';
export function DefaultHeightMapShape3D(item) {
    DefaultShape3D(item);
    item.map_data ?? (item.map_data = create.PackedFloat32Array(0, 0, 0, 0));
    item.map_depth ?? (item.map_depth = 2);
    item.map_width ?? (item.map_width = 2);
}
