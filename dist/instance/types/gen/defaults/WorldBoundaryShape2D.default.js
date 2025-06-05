/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultShape2D } from './Shape2D.default';
export function DefaultWorldBoundaryShape2D(item) {
    DefaultShape2D(item);
    item.distance ?? (item.distance = 0.0);
    item.normal ?? (item.normal = create.Vector2(0, -1));
}
