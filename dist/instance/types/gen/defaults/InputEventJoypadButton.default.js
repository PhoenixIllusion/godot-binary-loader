import { DefaultInputEvent } from './InputEvent.default';
export function DefaultInputEventJoypadButton(item) {
    DefaultInputEvent(item);
    item.button_index ?? (item.button_index = 0);
    item.pressed ?? (item.pressed = false);
    item.pressure ?? (item.pressure = 0.0);
}
