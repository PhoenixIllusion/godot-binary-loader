/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultControl } from './Control.default';
export function DefaultRichTextLabel(item) {
    DefaultControl(item);
    item.autowrap_mode ?? (item.autowrap_mode = 3);
    item.bbcode_enabled ?? (item.bbcode_enabled = false);
    item.clip_contents ?? (item.clip_contents = true);
    item.context_menu_enabled ?? (item.context_menu_enabled = false);
    item.custom_effects ?? (item.custom_effects = []);
    item.deselect_on_focus_loss_enabled ?? (item.deselect_on_focus_loss_enabled = true);
    item.drag_and_drop_selection_enabled ?? (item.drag_and_drop_selection_enabled = true);
    item.fit_content ?? (item.fit_content = false);
    item.hint_underlined ?? (item.hint_underlined = true);
    item.horizontal_alignment ?? (item.horizontal_alignment = 0);
    item.justification_flags ?? (item.justification_flags = 163);
    item.language ?? (item.language = "");
    item.meta_underlined ?? (item.meta_underlined = true);
    item.progress_bar_delay ?? (item.progress_bar_delay = 1000);
    item.scroll_active ?? (item.scroll_active = true);
    item.scroll_following ?? (item.scroll_following = false);
    item.selection_enabled ?? (item.selection_enabled = false);
    item.shortcut_keys_enabled ?? (item.shortcut_keys_enabled = true);
    item.structured_text_bidi_override ?? (item.structured_text_bidi_override = 0);
    item.structured_text_bidi_override_options ?? (item.structured_text_bidi_override_options = []);
    item.tab_size ?? (item.tab_size = 4);
    item.tab_stops ?? (item.tab_stops = create.PackedFloat32Array());
    item.text ?? (item.text = "");
    item.text_direction ?? (item.text_direction = 0);
    item.threaded ?? (item.threaded = false);
    item.visible_characters ?? (item.visible_characters = -1);
    item.visible_characters_behavior ?? (item.visible_characters_behavior = 0);
    item.visible_ratio ?? (item.visible_ratio = 1.0);
}
