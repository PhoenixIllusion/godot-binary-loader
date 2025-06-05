import { DefaultInputEvent } from './InputEvent.default';
export function DefaultInputEventJoypadMotion(item) {
    DefaultInputEvent(item);
    item.axis ?? (item.axis = 0);
    item.axis_value ?? (item.axis_value = 0.0);
}
