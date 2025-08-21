import { DefaultInputEventMouse } from './InputEventMouse.default.js';
export function DefaultInputEventMouseButton(item) {
    DefaultInputEventMouse(item);
    item.button_index ?? (item.button_index = 0);
    item.canceled ?? (item.canceled = false);
    item.double_click ?? (item.double_click = false);
    item.factor ?? (item.factor = 1.0);
    item.pressed ?? (item.pressed = false);
}
