/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode } from './Node.default.js';
export function DefaultStatusIndicator(item) {
    DefaultNode(item);
    //icon
    item.menu ?? (item.menu = create.NodePath(""));
    item.tooltip ?? (item.tooltip = "");
    item.visible ?? (item.visible = true);
}
