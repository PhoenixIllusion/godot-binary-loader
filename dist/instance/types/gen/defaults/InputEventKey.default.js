import { DefaultInputEventWithModifiers } from './InputEventWithModifiers.default.js';
export function DefaultInputEventKey(item) {
    DefaultInputEventWithModifiers(item);
    item.echo ?? (item.echo = false);
    item.key_label ?? (item.key_label = 0);
    item.keycode ?? (item.keycode = 0);
    item.location ?? (item.location = 0);
    item.physical_keycode ?? (item.physical_keycode = 0);
    item.pressed ?? (item.pressed = false);
    item.unicode ?? (item.unicode = 0);
}
