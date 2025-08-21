/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultInputEventMouse } from './InputEventMouse.default.js';
export function DefaultInputEventMouseMotion(item) {
    DefaultInputEventMouse(item);
    item.pen_inverted ?? (item.pen_inverted = false);
    item.pressure ?? (item.pressure = 0.0);
    item.relative ?? (item.relative = create.Vector2(0, 0));
    item.screen_relative ?? (item.screen_relative = create.Vector2(0, 0));
    item.screen_velocity ?? (item.screen_velocity = create.Vector2(0, 0));
    item.tilt ?? (item.tilt = create.Vector2(0, 0));
    item.velocity ?? (item.velocity = create.Vector2(0, 0));
}
