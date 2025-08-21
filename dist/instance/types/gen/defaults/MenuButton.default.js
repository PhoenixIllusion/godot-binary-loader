import { DefaultButton } from './Button.default.js';
export function DefaultMenuButton(item) {
    DefaultButton(item);
    item.action_mode ?? (item.action_mode = 0);
    item.flat ?? (item.flat = true);
    item.focus_mode ?? (item.focus_mode = 0);
    item.item_count ?? (item.item_count = 0);
    item.switch_on_hover ?? (item.switch_on_hover = false);
    item.toggle_mode ?? (item.toggle_mode = true);
}
