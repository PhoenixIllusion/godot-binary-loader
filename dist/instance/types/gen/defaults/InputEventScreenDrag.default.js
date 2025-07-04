/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultInputEventFromWindow } from './InputEventFromWindow.default';
export function DefaultInputEventScreenDrag(item) {
    DefaultInputEventFromWindow(item);
    item.index ?? (item.index = 0);
    item.pen_inverted ?? (item.pen_inverted = false);
    item.position ?? (item.position = create.Vector2(0, 0));
    item.pressure ?? (item.pressure = 0.0);
    item.relative ?? (item.relative = create.Vector2(0, 0));
    item.screen_relative ?? (item.screen_relative = create.Vector2(0, 0));
    item.screen_velocity ?? (item.screen_velocity = create.Vector2(0, 0));
    item.tilt ?? (item.tilt = create.Vector2(0, 0));
    item.velocity ?? (item.velocity = create.Vector2(0, 0));
}
