/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode3D } from './Node3D.default.js';
export function DefaultCollisionPolygon3D(item) {
    DefaultNode3D(item);
    item.depth ?? (item.depth = 1.0);
    item.disabled ?? (item.disabled = false);
    item.margin ?? (item.margin = 0.04);
    item.polygon ?? (item.polygon = create.PackedVector2Array());
}
