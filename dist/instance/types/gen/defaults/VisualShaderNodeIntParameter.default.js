/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisualShaderNodeParameter } from './VisualShaderNodeParameter.default.js';
export function DefaultVisualShaderNodeIntParameter(item) {
    DefaultVisualShaderNodeParameter(item);
    item.default_value ?? (item.default_value = 0);
    item.default_value_enabled ?? (item.default_value_enabled = false);
    item.enum_names ?? (item.enum_names = create.PackedStringArray());
    item.hint ?? (item.hint = 0);
    item.max ?? (item.max = 100);
    item.min ?? (item.min = 0);
    item.step ?? (item.step = 1);
}
