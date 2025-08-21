import { DefaultRange } from './Range.default';
export function DefaultSpinBox(item) {
    DefaultRange(item);
    item.alignment ?? (item.alignment = 0);
    item.custom_arrow_step ?? (item.custom_arrow_step = 0.0);
    item.editable ?? (item.editable = true);
    item.prefix ?? (item.prefix = "");
    item.select_all_on_focus ?? (item.select_all_on_focus = false);
    item.size_flags_vertical ?? (item.size_flags_vertical = 1);
    item.step ?? (item.step = 1.0);
    item.suffix ?? (item.suffix = "");
    item.update_on_text_changed ?? (item.update_on_text_changed = false);
    //down_disabled_icon_modulate
    //down_hover_icon_modulate
    //down_icon_modulate
    //down_pressed_icon_modulate
    //up_disabled_icon_modulate
    //up_hover_icon_modulate
    //up_icon_modulate
    //up_pressed_icon_modulate
    //buttons_vertical_separation
    //buttons_width
    //field_and_buttons_separation
    //set_min_buttons_width_from_icons
    //down
    //down_disabled
    //down_hover
    //down_pressed
    //up
    //up_disabled
    //up_hover
    //up_pressed
    //updown
    //down_background
    //down_background_disabled
    //down_background_hovered
    //down_background_pressed
    //field_and_buttons_separator
    //up_background
    //up_background_disabled
    //up_background_hovered
    //up_background_pressed
    //up_down_buttons_separator  
}
