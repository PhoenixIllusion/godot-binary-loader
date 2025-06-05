/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisualShaderNodeParameter } from './VisualShaderNodeParameter.default';
export function DefaultVisualShaderNodeTransformParameter(item) {
    DefaultVisualShaderNodeParameter(item);
    item.default_value ?? (item.default_value = create.Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0));
    item.default_value_enabled ?? (item.default_value_enabled = false);
}
