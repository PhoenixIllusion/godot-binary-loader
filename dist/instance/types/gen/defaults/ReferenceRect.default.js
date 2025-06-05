/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultControl } from './Control.default';
export function DefaultReferenceRect(item) {
    DefaultControl(item);
    item.border_color ?? (item.border_color = create.Color(1, 0, 0, 1));
    item.border_width ?? (item.border_width = 1.0);
    item.editor_only ?? (item.editor_only = true);
}
