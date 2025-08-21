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
    //children_hl_line_color
    //custom_button_font_highlight
    //drop_position_color
    //font_color
    //font_disabled_color
    //font_hovered_color
    //font_hovered_dimmed_color
    //font_outline_color
    //font_selected_color
    //guide_color
    //parent_hl_line_color
    //relationship_line_color
    //title_button_color
    //button_margin
    //children_hl_line_width
    //draw_guides
    //draw_relationship_lines
    //h_separation
    //icon_max_width
    //inner_item_margin_bottom
    //inner_item_margin_left
    //inner_item_margin_right
    //inner_item_margin_top
    //item_margin
    //outline_size
    //parent_hl_line_margin
    //parent_hl_line_width
    //relationship_line_width
    //scroll_border
    //scroll_speed
    //scrollbar_h_separation
    //scrollbar_margin_bottom
    //scrollbar_margin_left
    //scrollbar_margin_right
    //scrollbar_margin_top
    //scrollbar_v_separation
    //v_separation
    //font
    //title_button_font
    //font_size
    //title_button_font_size
    //arrow
    //arrow_collapsed
    //arrow_collapsed_mirrored
    //checked
    //checked_disabled
    //indeterminate
    //indeterminate_disabled
    //select_arrow
    //unchecked
    //unchecked_disabled
    //updown
    //button_hover
    //button_pressed
    //cursor
    //cursor_unfocused
    //custom_button
    //custom_button_hover
    //custom_button_pressed
    //focus
    //hovered
    //hovered_dimmed
    //panel
    //selected
    //selected_focus
    //title_button_hover
    //title_button_normal
    //title_button_pressed  
}
