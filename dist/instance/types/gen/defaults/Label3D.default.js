/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultGeometryInstance3D } from './GeometryInstance3D.default.js';
export function DefaultLabel3D(item) {
    DefaultGeometryInstance3D(item);
    item.alpha_antialiasing_edge ?? (item.alpha_antialiasing_edge = 0.0);
    item.alpha_antialiasing_mode ?? (item.alpha_antialiasing_mode = 0);
    item.alpha_cut ?? (item.alpha_cut = 0);
    item.alpha_hash_scale ?? (item.alpha_hash_scale = 1.0);
    item.alpha_scissor_threshold ?? (item.alpha_scissor_threshold = 0.5);
    item.autowrap_mode ?? (item.autowrap_mode = 0);
    item.billboard ?? (item.billboard = 0);
    item.cast_shadow ?? (item.cast_shadow = 0);
    item.double_sided ?? (item.double_sided = true);
    item.fixed_size ?? (item.fixed_size = false);
    //font
    item.font_size ?? (item.font_size = 32);
    item.gi_mode ?? (item.gi_mode = 0);
    item.horizontal_alignment ?? (item.horizontal_alignment = 1);
    item.justification_flags ?? (item.justification_flags = 163);
    item.language ?? (item.language = "");
    item.line_spacing ?? (item.line_spacing = 0.0);
    item.modulate ?? (item.modulate = create.Color(1, 1, 1, 1));
    item.no_depth_test ?? (item.no_depth_test = false);
    item.offset ?? (item.offset = create.Vector2(0, 0));
    item.outline_modulate ?? (item.outline_modulate = create.Color(0, 0, 0, 1));
    item.outline_render_priority ?? (item.outline_render_priority = -1);
    item.outline_size ?? (item.outline_size = 12);
    item.pixel_size ?? (item.pixel_size = 0.005);
    item.render_priority ?? (item.render_priority = 0);
    item.shaded ?? (item.shaded = false);
    item.structured_text_bidi_override ?? (item.structured_text_bidi_override = 0);
    item.structured_text_bidi_override_options ?? (item.structured_text_bidi_override_options = []);
    item.text ?? (item.text = "");
    item.text_direction ?? (item.text_direction = 0);
    item.texture_filter ?? (item.texture_filter = 3);
    item.uppercase ?? (item.uppercase = false);
    item.vertical_alignment ?? (item.vertical_alignment = 1);
    item.width ?? (item.width = 500.0);
}
