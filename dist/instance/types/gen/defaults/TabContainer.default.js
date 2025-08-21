import { DefaultContainer } from './Container.default';
export function DefaultTabContainer(item) {
    DefaultContainer(item);
    item.all_tabs_in_front ?? (item.all_tabs_in_front = false);
    item.clip_tabs ?? (item.clip_tabs = true);
    item.current_tab ?? (item.current_tab = -1);
    item.deselect_enabled ?? (item.deselect_enabled = false);
    item.drag_to_rearrange_enabled ?? (item.drag_to_rearrange_enabled = false);
    item.tab_alignment ?? (item.tab_alignment = 0);
    item.tab_focus_mode ?? (item.tab_focus_mode = 2);
    item.tabs_position ?? (item.tabs_position = 0);
    item.tabs_rearrange_group ?? (item.tabs_rearrange_group = -1);
    item.tabs_visible ?? (item.tabs_visible = true);
    item.use_hidden_tabs_for_min_size ?? (item.use_hidden_tabs_for_min_size = false);
    //drop_mark_color
    //font_disabled_color
    //font_hovered_color
    //font_outline_color
    //font_selected_color
    //font_unselected_color
    //icon_max_width
    //icon_separation
    //outline_size
    //side_margin
    //font
    //font_size
    //decrement
    //decrement_highlight
    //drop_mark
    //increment
    //increment_highlight
    //menu
    //menu_highlight
    //panel
    //tab_disabled
    //tab_focus
    //tab_hovered
    //tab_selected
    //tab_unselected
    //tabbar_background  
}
