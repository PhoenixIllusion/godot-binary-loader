/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultShape2D } from './Shape2D.default';
export function DefaultConvexPolygonShape2D(item) {
    DefaultShape2D(item);
    item.points ?? (item.points = create.PackedVector2Array());
}
