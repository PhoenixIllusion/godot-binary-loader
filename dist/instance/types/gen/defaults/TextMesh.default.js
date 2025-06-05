/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultPrimitiveMesh } from './PrimitiveMesh.default';
export function DefaultTextMesh(item) {
    DefaultPrimitiveMesh(item);
    item.autowrap_mode ?? (item.autowrap_mode = 0);
    item.curve_step ?? (item.curve_step = 0.5);
    item.depth ?? (item.depth = 0.05);
    //font
    item.font_size ?? (item.font_size = 16);
    item.horizontal_alignment ?? (item.horizontal_alignment = 1);
    item.justification_flags ?? (item.justification_flags = 163);
    item.language ?? (item.language = "");
    item.line_spacing ?? (item.line_spacing = 0.0);
    item.offset ?? (item.offset = create.Vector2(0, 0));
    item.pixel_size ?? (item.pixel_size = 0.01);
    item.structured_text_bidi_override ?? (item.structured_text_bidi_override = 0);
    item.structured_text_bidi_override_options ?? (item.structured_text_bidi_override_options = []);
    item.text ?? (item.text = "");
    item.text_direction ?? (item.text_direction = 0);
    item.uppercase ?? (item.uppercase = false);
    item.vertical_alignment ?? (item.vertical_alignment = 1);
    item.width ?? (item.width = 500.0);
}
