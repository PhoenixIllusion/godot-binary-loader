import { DefaultScrollBar } from './ScrollBar.default.js';
export function DefaultVScrollBar(item) {
    DefaultScrollBar(item);
    item.size_flags_horizontal ?? (item.size_flags_horizontal = 0);
    item.size_flags_vertical ?? (item.size_flags_vertical = 1);
}
