/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default.js';
export function DefaultBackBufferCopy(item) {
    DefaultNode2D(item);
    item.copy_mode ?? (item.copy_mode = 1);
    item.rect ?? (item.rect = create.Rect2(-100, -100, 200, 200));
}
