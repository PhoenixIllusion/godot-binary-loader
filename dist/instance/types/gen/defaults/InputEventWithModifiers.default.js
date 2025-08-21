import { DefaultInputEventFromWindow } from './InputEventFromWindow.default.js';
export function DefaultInputEventWithModifiers(item) {
    DefaultInputEventFromWindow(item);
    item.alt_pressed ?? (item.alt_pressed = false);
    item.command_or_control_autoremap ?? (item.command_or_control_autoremap = false);
    item.ctrl_pressed ?? (item.ctrl_pressed = false);
    item.meta_pressed ?? (item.meta_pressed = false);
    item.shift_pressed ?? (item.shift_pressed = false);
}
