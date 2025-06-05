import { DefaultControl } from './Control.default';
export function DefaultTree(item) {
    DefaultControl(item);
    item.allow_reselect ?? (item.allow_reselect = false);
    item.allow_rmb_select ?? (item.allow_rmb_select = false);
    item.allow_search ?? (item.allow_search = true);
    item.clip_contents ?? (item.clip_contents = true);
    item.column_titles_visible ?? (item.column_titles_visible = false);
    item.columns ?? (item.columns = 1);
    item.drop_mode_flags ?? (item.drop_mode_flags = 0);
    item.enable_recursive_folding ?? (item.enable_recursive_folding = true);
    item.focus_mode ?? (item.focus_mode = 2);
    item.hide_folding ?? (item.hide_folding = false);
    item.hide_root ?? (item.hide_root = false);
    item.scroll_horizontal_enabled ?? (item.scroll_horizontal_enabled = true);
    item.scroll_vertical_enabled ?? (item.scroll_vertical_enabled = true);
    item.select_mode ?? (item.select_mode = 0);
}
