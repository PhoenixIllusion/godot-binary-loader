/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultXRTracker } from './XRTracker.default.js';
export function DefaultXRFaceTracker(item) {
    DefaultXRTracker(item);
    item.blend_shapes ?? (item.blend_shapes = create.PackedFloat32Array());
    item.type ?? (item.type = 64);
}
