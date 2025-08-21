/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultInputEventWithModifiers } from './InputEventWithModifiers.default.js';
export function DefaultInputEventGesture(item) {
    DefaultInputEventWithModifiers(item);
    item.position ?? (item.position = create.Vector2(0, 0));
}
