import { DefaultControl } from './Control.default';
export function DefaultMenuBar(item) {
    DefaultControl(item);
    item.flat ?? (item.flat = false);
    item.language ?? (item.language = "");
    item.prefer_global_menu ?? (item.prefer_global_menu = true);
    item.start_index ?? (item.start_index = -1);
    item.switch_on_hover ?? (item.switch_on_hover = true);
    item.text_direction ?? (item.text_direction = 0);
    //font_color
    //font_disabled_color
    //font_focus_color
    //font_hover_color
    //font_hover_pressed_color
    //font_outline_color
    //font_pressed_color
    //h_separation
    //outline_size
    //font
    //font_size
    //disabled
    //disabled_mirrored
    //hover
    //hover_mirrored
    //hover_pressed
    //hover_pressed_mirrored
    //normal
    //normal_mirrored
    //pressed
    //pressed_mirrored  
}
