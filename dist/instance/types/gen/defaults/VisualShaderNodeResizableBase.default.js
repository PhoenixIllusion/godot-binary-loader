/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeResizableBase(item) {
    DefaultVisualShaderNode(item);
    item.size ?? (item.size = create.Vector2(0, 0));
}
