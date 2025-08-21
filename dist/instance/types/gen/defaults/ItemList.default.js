/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultControl } from './Control.default.js';
export function DefaultItemList(item) {
    DefaultControl(item);
    item.allow_reselect ?? (item.allow_reselect = false);
    item.allow_rmb_select ?? (item.allow_rmb_select = false);
    item.allow_search ?? (item.allow_search = true);
    item.auto_height ?? (item.auto_height = false);
    item.auto_width ?? (item.auto_width = false);
    item.clip_contents ?? (item.clip_contents = true);
    item.fixed_column_width ?? (item.fixed_column_width = 0);
    item.fixed_icon_size ?? (item.fixed_icon_size = create.Vector2i(0, 0));
    item.focus_mode ?? (item.focus_mode = 2);
    item.icon_mode ?? (item.icon_mode = 1);
    item.icon_scale ?? (item.icon_scale = 1.0);
    item.item_count ?? (item.item_count = 0);
    item.max_columns ?? (item.max_columns = 1);
    item.max_text_lines ?? (item.max_text_lines = 1);
    item.same_column_width ?? (item.same_column_width = false);
    item.select_mode ?? (item.select_mode = 0);
    item.text_overrun_behavior ?? (item.text_overrun_behavior = 3);
    //font_color
    //font_hovered_color
    //font_outline_color
    //font_selected_color
    //guide_color
    //h_separation
    //icon_margin
    //line_separation
    //outline_size
    //v_separation
    //font
    //font_size
    //cursor
    //cursor_unfocused
    //focus
    //hovered
    //panel
    //selected
    //selected_focus  
}
