/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultShape2D } from './Shape2D.default';
export function DefaultRectangleShape2D(item) {
    DefaultShape2D(item);
    item.size ?? (item.size = create.Vector2(20, 20));
}
