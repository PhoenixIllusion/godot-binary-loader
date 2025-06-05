/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultShape2D } from './Shape2D.default';
export function DefaultSegmentShape2D(item) {
    DefaultShape2D(item);
    item.a ?? (item.a = create.Vector2(0, 0));
    item.b ?? (item.b = create.Vector2(0, 10));
}
