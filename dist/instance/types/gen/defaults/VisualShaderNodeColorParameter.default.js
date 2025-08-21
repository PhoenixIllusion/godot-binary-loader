/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisualShaderNodeParameter } from './VisualShaderNodeParameter.default.js';
export function DefaultVisualShaderNodeColorParameter(item) {
    DefaultVisualShaderNodeParameter(item);
    item.default_value ?? (item.default_value = create.Color(1, 1, 1, 1));
    item.default_value_enabled ?? (item.default_value_enabled = false);
}
