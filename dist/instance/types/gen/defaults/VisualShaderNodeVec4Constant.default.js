/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisualShaderNodeConstant } from './VisualShaderNodeConstant.default';
export function DefaultVisualShaderNodeVec4Constant(item) {
    DefaultVisualShaderNodeConstant(item);
    item.constant ?? (item.constant = create.Quaternion(0, 0, 0, 1));
}
