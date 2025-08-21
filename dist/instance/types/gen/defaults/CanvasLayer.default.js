/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode } from './Node.default.js';
export function DefaultCanvasLayer(item) {
    DefaultNode(item);
    //custom_viewport
    item.follow_viewport_enabled ?? (item.follow_viewport_enabled = false);
    item.follow_viewport_scale ?? (item.follow_viewport_scale = 1.0);
    item.layer ?? (item.layer = 1);
    item.offset ?? (item.offset = create.Vector2(0, 0));
    item.rotation ?? (item.rotation = 0.0);
    item.scale ?? (item.scale = create.Vector2(1, 1));
    item.transform ?? (item.transform = create.Transform2D(1, 0, 0, 1, 0, 0));
    item.visible ?? (item.visible = true);
}
