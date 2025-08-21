import { DefaultInputEvent } from './InputEvent.default.js';
export function DefaultInputEventFromWindow(item) {
    DefaultInputEvent(item);
    item.window_id ?? (item.window_id = 0);
}
