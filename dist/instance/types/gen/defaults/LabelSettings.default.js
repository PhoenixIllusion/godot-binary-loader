/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultResource } from './Resource.default.js';
export function DefaultLabelSettings(item) {
    DefaultResource(item);
    //font
    item.font_color ?? (item.font_color = create.Color(1, 1, 1, 1));
    item.font_size ?? (item.font_size = 16);
    item.line_spacing ?? (item.line_spacing = 3.0);
    item.outline_color ?? (item.outline_color = create.Color(1, 1, 1, 1));
    item.outline_size ?? (item.outline_size = 0);
    item.shadow_color ?? (item.shadow_color = create.Color(0, 0, 0, 0));
    item.shadow_offset ?? (item.shadow_offset = create.Vector2(1, 1));
    item.shadow_size ?? (item.shadow_size = 1);
}
