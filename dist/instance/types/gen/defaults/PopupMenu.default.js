import { DefaultPopup } from './Popup.default.js';
export function DefaultPopupMenu(item) {
    DefaultPopup(item);
    item.allow_search ?? (item.allow_search = true);
    item.hide_on_checkable_item_selection ?? (item.hide_on_checkable_item_selection = true);
    item.hide_on_item_selection ?? (item.hide_on_item_selection = true);
    item.hide_on_state_item_selection ?? (item.hide_on_state_item_selection = false);
    item.item_count ?? (item.item_count = 0);
    item.prefer_native_menu ?? (item.prefer_native_menu = false);
    item.submenu_popup_delay ?? (item.submenu_popup_delay = 0.3);
    item.system_menu_id ?? (item.system_menu_id = 0);
    //font_accelerator_color
    //font_color
    //font_disabled_color
    //font_hover_color
    //font_outline_color
    //font_separator_color
    //font_separator_outline_color
    //h_separation
    //icon_max_width
    //indent
    //item_end_padding
    //item_start_padding
    //outline_size
    //separator_outline_size
    //v_separation
    //font
    //font_separator
    //font_separator_size
    //font_size
    //checked
    //checked_disabled
    //radio_checked
    //radio_checked_disabled
    //radio_unchecked
    //radio_unchecked_disabled
    //submenu
    //submenu_mirrored
    //unchecked
    //unchecked_disabled
    //hover
    //labeled_separator_left
    //labeled_separator_right
    //panel
    //separator  
}
