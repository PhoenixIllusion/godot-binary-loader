/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default';
export function DefaultBone2D(item) {
    DefaultNode2D(item);
    item.rest ?? (item.rest = create.Transform2D(0, 0, 0, 0, 0, 0));
}
