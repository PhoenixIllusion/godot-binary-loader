/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultResource } from './Resource.default.js';
export function DefaultGradient(item) {
    DefaultResource(item);
    item.colors ?? (item.colors = create.PackedColorArray(0, 0, 0, 1, 1, 1, 1, 1));
    item.interpolation_color_space ?? (item.interpolation_color_space = 0);
    item.interpolation_mode ?? (item.interpolation_mode = 0);
    item.offsets ?? (item.offsets = create.PackedFloat32Array(0, 1));
}
