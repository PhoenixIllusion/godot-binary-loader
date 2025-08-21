/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisualShaderNodeConstant } from './VisualShaderNodeConstant.default.js';
export function DefaultVisualShaderNodeColorConstant(item) {
    DefaultVisualShaderNodeConstant(item);
    item.constant ?? (item.constant = create.Color(1, 1, 1, 1));
}
