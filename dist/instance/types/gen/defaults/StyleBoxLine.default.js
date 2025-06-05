/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultStyleBox } from './StyleBox.default';
export function DefaultStyleBoxLine(item) {
    DefaultStyleBox(item);
    item.color ?? (item.color = create.Color(0, 0, 0, 1));
    item.grow_begin ?? (item.grow_begin = 1.0);
    item.grow_end ?? (item.grow_end = 1.0);
    item.thickness ?? (item.thickness = 1);
    item.vertical ?? (item.vertical = false);
}
