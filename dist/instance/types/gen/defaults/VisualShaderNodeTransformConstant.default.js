/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisualShaderNodeConstant } from './VisualShaderNodeConstant.default.js';
export function DefaultVisualShaderNodeTransformConstant(item) {
    DefaultVisualShaderNodeConstant(item);
    item.constant ?? (item.constant = create.Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0));
}
