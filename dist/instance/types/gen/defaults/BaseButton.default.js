import { DefaultControl } from './Control.default';
export function DefaultBaseButton(item) {
    DefaultControl(item);
    item.action_mode ?? (item.action_mode = 1);
    //button_group
    item.button_mask ?? (item.button_mask = 1);
    item.button_pressed ?? (item.button_pressed = false);
    item.disabled ?? (item.disabled = false);
    item.focus_mode ?? (item.focus_mode = 2);
    item.keep_pressed_outside ?? (item.keep_pressed_outside = false);
    //shortcut
    item.shortcut_feedback ?? (item.shortcut_feedback = true);
    item.shortcut_in_tooltip ?? (item.shortcut_in_tooltip = true);
    item.toggle_mode ?? (item.toggle_mode = false);
}
