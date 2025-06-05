/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultInputEventGesture } from './InputEventGesture.default';
export function DefaultInputEventPanGesture(item) {
    DefaultInputEventGesture(item);
    item.delta ?? (item.delta = create.Vector2(0, 0));
}
