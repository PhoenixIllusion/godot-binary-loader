/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultControl } from './Control.default';
export function DefaultLabel(item) {
    DefaultControl(item);
    item.autowrap_mode ?? (item.autowrap_mode = 0);
    item.clip_text ?? (item.clip_text = false);
    item.ellipsis_char ?? (item.ellipsis_char = "…");
    item.horizontal_alignment ?? (item.horizontal_alignment = 0);
    item.justification_flags ?? (item.justification_flags = 163);
    //label_settings
    item.language ?? (item.language = "");
    item.lines_skipped ?? (item.lines_skipped = 0);
    item.max_lines_visible ?? (item.max_lines_visible = -1);
    item.mouse_filter ?? (item.mouse_filter = 2);
    item.size_flags_vertical ?? (item.size_flags_vertical = 4);
    item.structured_text_bidi_override ?? (item.structured_text_bidi_override = 0);
    item.structured_text_bidi_override_options ?? (item.structured_text_bidi_override_options = []);
    item.tab_stops ?? (item.tab_stops = create.PackedFloat32Array());
    item.text ?? (item.text = "");
    item.text_direction ?? (item.text_direction = 0);
    item.text_overrun_behavior ?? (item.text_overrun_behavior = 0);
    item.uppercase ?? (item.uppercase = false);
    item.vertical_alignment ?? (item.vertical_alignment = 0);
    item.visible_characters ?? (item.visible_characters = -1);
    item.visible_characters_behavior ?? (item.visible_characters_behavior = 0);
    item.visible_ratio ?? (item.visible_ratio = 1.0);
}
