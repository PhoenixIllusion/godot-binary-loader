/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultControl } from './Control.default';
export function DefaultColorRect(item) {
    DefaultControl(item);
    item.color ?? (item.color = create.Color(1, 1, 1, 1));
}
