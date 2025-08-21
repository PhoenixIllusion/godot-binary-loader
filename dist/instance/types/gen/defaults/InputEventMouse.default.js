/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultInputEventWithModifiers } from './InputEventWithModifiers.default.js';
export function DefaultInputEventMouse(item) {
    DefaultInputEventWithModifiers(item);
    item.button_mask ?? (item.button_mask = 0);
    item.global_position ?? (item.global_position = create.Vector2(0, 0));
    item.position ?? (item.position = create.Vector2(0, 0));
}
