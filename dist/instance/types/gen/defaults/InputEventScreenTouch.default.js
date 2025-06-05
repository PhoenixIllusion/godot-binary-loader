/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultInputEventFromWindow } from './InputEventFromWindow.default';
export function DefaultInputEventScreenTouch(item) {
    DefaultInputEventFromWindow(item);
    item.canceled ?? (item.canceled = false);
    item.double_tap ?? (item.double_tap = false);
    item.index ?? (item.index = 0);
    item.position ?? (item.position = create.Vector2(0, 0));
    item.pressed ?? (item.pressed = false);
}
