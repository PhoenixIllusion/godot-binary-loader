import { DefaultBaseButton } from './BaseButton.default';
export function DefaultLinkButton(item) {
    DefaultBaseButton(item);
    item.focus_mode ?? (item.focus_mode = 0);
    item.language ?? (item.language = "");
    item.mouse_default_cursor_shape ?? (item.mouse_default_cursor_shape = 2);
    item.structured_text_bidi_override ?? (item.structured_text_bidi_override = 0);
    item.structured_text_bidi_override_options ?? (item.structured_text_bidi_override_options = []);
    item.text ?? (item.text = "");
    item.text_direction ?? (item.text_direction = 0);
    item.underline ?? (item.underline = 0);
    item.uri ?? (item.uri = "");
    //font_color
    //font_disabled_color
    //font_focus_color
    //font_hover_color
    //font_hover_pressed_color
    //font_outline_color
    //font_pressed_color
    //outline_size
    //underline_spacing
    //font
    //font_size
    //focus  
}
