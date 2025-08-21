/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultShape3D } from './Shape3D.default.js';
export function DefaultConvexPolygonShape3D(item) {
    DefaultShape3D(item);
    item.points ?? (item.points = create.PackedVector3Array());
}
