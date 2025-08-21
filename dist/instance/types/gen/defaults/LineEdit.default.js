import { DefaultControl } from './Control.default';
export function DefaultLineEdit(item) {
    DefaultControl(item);
    item.alignment ?? (item.alignment = 0);
    item.caret_blink ?? (item.caret_blink = false);
    item.caret_blink_interval ?? (item.caret_blink_interval = 0.65);
    item.caret_column ?? (item.caret_column = 0);
    item.caret_force_displayed ?? (item.caret_force_displayed = false);
    item.caret_mid_grapheme ?? (item.caret_mid_grapheme = false);
    item.clear_button_enabled ?? (item.clear_button_enabled = false);
    item.context_menu_enabled ?? (item.context_menu_enabled = true);
    item.deselect_on_focus_loss_enabled ?? (item.deselect_on_focus_loss_enabled = true);
    item.drag_and_drop_selection_enabled ?? (item.drag_and_drop_selection_enabled = true);
    item.draw_control_chars ?? (item.draw_control_chars = false);
    item.editable ?? (item.editable = true);
    item.expand_to_text_length ?? (item.expand_to_text_length = false);
    item.flat ?? (item.flat = false);
    item.focus_mode ?? (item.focus_mode = 2);
    item.language ?? (item.language = "");
    item.max_length ?? (item.max_length = 0);
    item.middle_mouse_paste_enabled ?? (item.middle_mouse_paste_enabled = true);
    item.mouse_default_cursor_shape ?? (item.mouse_default_cursor_shape = 1);
    item.placeholder_text ?? (item.placeholder_text = "");
    //right_icon
    item.secret ?? (item.secret = false);
    item.secret_character ?? (item.secret_character = "•");
    item.select_all_on_focus ?? (item.select_all_on_focus = false);
    item.selecting_enabled ?? (item.selecting_enabled = true);
    item.shortcut_keys_enabled ?? (item.shortcut_keys_enabled = true);
    item.structured_text_bidi_override ?? (item.structured_text_bidi_override = 0);
    item.structured_text_bidi_override_options ?? (item.structured_text_bidi_override_options = []);
    item.text ?? (item.text = "");
    item.text_direction ?? (item.text_direction = 0);
    item.virtual_keyboard_enabled ?? (item.virtual_keyboard_enabled = true);
    item.virtual_keyboard_type ?? (item.virtual_keyboard_type = 0);
    //caret_color
    //clear_button_color
    //clear_button_color_pressed
    //font_color
    //font_outline_color
    //font_placeholder_color
    //font_selected_color
    //font_uneditable_color
    //selection_color
    //caret_width
    //minimum_character_width
    //outline_size
    //font
    //font_size
    //clear
    //focus
    //normal
    //read_only  
}
