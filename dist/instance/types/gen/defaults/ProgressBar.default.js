import { DefaultRange } from './Range.default.js';
export function DefaultProgressBar(item) {
    DefaultRange(item);
    //editor_preview_indeterminate
    item.fill_mode ?? (item.fill_mode = 0);
    item.indeterminate ?? (item.indeterminate = false);
    item.show_percentage ?? (item.show_percentage = true);
    //font_color
    //font_outline_color
    //outline_size
    //font
    //font_size
    //background
    //fill  
}
