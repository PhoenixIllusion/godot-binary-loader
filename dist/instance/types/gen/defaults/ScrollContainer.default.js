import { DefaultContainer } from './Container.default';
export function DefaultScrollContainer(item) {
    DefaultContainer(item);
    item.clip_contents ?? (item.clip_contents = true);
    item.follow_focus ?? (item.follow_focus = false);
    item.horizontal_scroll_mode ?? (item.horizontal_scroll_mode = 1);
    item.scroll_deadzone ?? (item.scroll_deadzone = 0);
    item.scroll_horizontal ?? (item.scroll_horizontal = 0);
    item.scroll_horizontal_custom_step ?? (item.scroll_horizontal_custom_step = -1.0);
    item.scroll_vertical ?? (item.scroll_vertical = 0);
    item.scroll_vertical_custom_step ?? (item.scroll_vertical_custom_step = -1.0);
    item.vertical_scroll_mode ?? (item.vertical_scroll_mode = 1);
}
