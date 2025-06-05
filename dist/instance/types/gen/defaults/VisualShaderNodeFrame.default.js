/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisualShaderNodeResizableBase } from './VisualShaderNodeResizableBase.default';
export function DefaultVisualShaderNodeFrame(item) {
    DefaultVisualShaderNodeResizableBase(item);
    item.attached_nodes ?? (item.attached_nodes = create.PackedInt32Array());
    item.autoshrink ?? (item.autoshrink = true);
    item.tint_color ?? (item.tint_color = create.Color(0.3, 0.3, 0.3, 0.75));
    item.tint_color_enabled ?? (item.tint_color_enabled = false);
    item.title ?? (item.title = "Title");
}
