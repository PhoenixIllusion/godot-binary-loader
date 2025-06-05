import { DefaultControl } from './Control.default';
export function DefaultMenuBar(item) {
    DefaultControl(item);
    item.flat ?? (item.flat = false);
    item.language ?? (item.language = "");
    item.prefer_global_menu ?? (item.prefer_global_menu = true);
    item.start_index ?? (item.start_index = -1);
    item.switch_on_hover ?? (item.switch_on_hover = true);
    item.text_direction ?? (item.text_direction = 0);
}
