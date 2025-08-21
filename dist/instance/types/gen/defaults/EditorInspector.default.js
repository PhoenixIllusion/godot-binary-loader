import { DefaultScrollContainer } from './ScrollContainer.default.js';
export function DefaultEditorInspector(item) {
    DefaultScrollContainer(item);
    item.follow_focus ?? (item.follow_focus = true);
    item.horizontal_scroll_mode ?? (item.horizontal_scroll_mode = 0);
}
