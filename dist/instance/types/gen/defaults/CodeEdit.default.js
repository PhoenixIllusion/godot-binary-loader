import { DefaultTextEdit } from './TextEdit.default';
export function DefaultCodeEdit(item) {
    DefaultTextEdit(item);
    item.auto_brace_completion_enabled ?? (item.auto_brace_completion_enabled = false);
    item.auto_brace_completion_highlight_matching ?? (item.auto_brace_completion_highlight_matching = false);
    //auto_brace_completion_pairs = { "\"": "\"", "'": "'", "(": ")", "[": "]", "{": "}" }
    item.code_completion_enabled ?? (item.code_completion_enabled = false);
    item.code_completion_prefixes ?? (item.code_completion_prefixes = []);
    item.delimiter_comments ?? (item.delimiter_comments = []);
    item.delimiter_strings ?? (item.delimiter_strings = ["' '", "\" \""]);
    item.gutters_draw_bookmarks ?? (item.gutters_draw_bookmarks = false);
    item.gutters_draw_breakpoints_gutter ?? (item.gutters_draw_breakpoints_gutter = false);
    item.gutters_draw_executing_lines ?? (item.gutters_draw_executing_lines = false);
    item.gutters_draw_fold_gutter ?? (item.gutters_draw_fold_gutter = false);
    item.gutters_draw_line_numbers ?? (item.gutters_draw_line_numbers = false);
    item.gutters_zero_pad_line_numbers ?? (item.gutters_zero_pad_line_numbers = false);
    item.indent_automatic ?? (item.indent_automatic = false);
    //indent_automatic_prefixes = [":", "{", "[", "("]
    item.indent_size ?? (item.indent_size = 4);
    item.indent_use_spaces ?? (item.indent_use_spaces = false);
    item.layout_direction ?? (item.layout_direction = 2);
    item.line_folding ?? (item.line_folding = false);
    item.line_length_guidelines ?? (item.line_length_guidelines = []);
    item.symbol_lookup_on_click ?? (item.symbol_lookup_on_click = false);
    item.text_direction ?? (item.text_direction = 1);
    //bookmark_color
    //brace_mismatch_color
    //breakpoint_color
    //code_folding_color
    //completion_background_color
    //completion_existing_color
    //completion_scroll_color
    //completion_scroll_hovered_color
    //completion_selected_color
    //executing_line_color
    //folded_code_region_color
    //line_length_guideline_color
    //line_number_color
    //completion_lines
    //completion_max_width
    //completion_scroll_width
    //bookmark
    //breakpoint
    //can_fold
    //can_fold_code_region
    //completion_color_bg
    //executing_line
    //folded
    //folded_code_region
    //folded_eol_icon
    //completion  
}
