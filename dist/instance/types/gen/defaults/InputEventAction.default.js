import { DefaultInputEvent } from './InputEvent.default';
export function DefaultInputEventAction(item) {
    DefaultInputEvent(item);
    item.action ?? (item.action = "");
    item.event_index ?? (item.event_index = -1);
    item.pressed ?? (item.pressed = false);
    item.strength ?? (item.strength = 1.0);
}
