import { DefaultBaseButton } from './BaseButton.default';
export function DefaultButton(item) {
    DefaultBaseButton(item);
    item.alignment ?? (item.alignment = 1);
    item.autowrap_mode ?? (item.autowrap_mode = 0);
    item.clip_text ?? (item.clip_text = false);
    item.expand_icon ?? (item.expand_icon = false);
    item.flat ?? (item.flat = false);
    //icon
    item.icon_alignment ?? (item.icon_alignment = 0);
    item.language ?? (item.language = "");
    item.text ?? (item.text = "");
    item.text_direction ?? (item.text_direction = 0);
    item.text_overrun_behavior ?? (item.text_overrun_behavior = 0);
    item.vertical_icon_alignment ?? (item.vertical_icon_alignment = 1);
    //font_color
    //font_disabled_color
    //font_focus_color
    //font_hover_color
    //font_hover_pressed_color
    //font_outline_color
    //font_pressed_color
    //icon_disabled_color
    //icon_focus_color
    //icon_hover_color
    //icon_hover_pressed_color
    //icon_normal_color
    //icon_pressed_color
    //align_to_largest_stylebox
    //h_separation
    //icon_max_width
    //outline_size
    //font
    //font_size
    //icon
    //disabled
    //disabled_mirrored
    //focus
    //hover
    //hover_mirrored
    //hover_pressed
    //hover_pressed_mirrored
    //normal
    //normal_mirrored
    //pressed
    //pressed_mirrored  
}
