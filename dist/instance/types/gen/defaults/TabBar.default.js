import { DefaultControl } from './Control.default';
export function DefaultTabBar(item) {
    DefaultControl(item);
    item.clip_tabs ?? (item.clip_tabs = true);
    item.current_tab ?? (item.current_tab = -1);
    item.deselect_enabled ?? (item.deselect_enabled = false);
    item.drag_to_rearrange_enabled ?? (item.drag_to_rearrange_enabled = false);
    item.focus_mode ?? (item.focus_mode = 2);
    item.max_tab_width ?? (item.max_tab_width = 0);
    item.scroll_to_selected ?? (item.scroll_to_selected = true);
    item.scrolling_enabled ?? (item.scrolling_enabled = true);
    item.select_with_rmb ?? (item.select_with_rmb = false);
    item.tab_alignment ?? (item.tab_alignment = 0);
    item.tab_close_display_policy ?? (item.tab_close_display_policy = 0);
    item.tab_count ?? (item.tab_count = 0);
    item.tabs_rearrange_group ?? (item.tabs_rearrange_group = -1);
    //drop_mark_color
    //font_disabled_color
    //font_hovered_color
    //font_outline_color
    //font_selected_color
    //font_unselected_color
    //h_separation
    //icon_max_width
    //outline_size
    //font
    //font_size
    //close
    //decrement
    //decrement_highlight
    //drop_mark
    //increment
    //increment_highlight
    //button_highlight
    //button_pressed
    //tab_disabled
    //tab_focus
    //tab_hovered
    //tab_selected
    //tab_unselected  
}
