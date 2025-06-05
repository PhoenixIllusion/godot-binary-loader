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
}
