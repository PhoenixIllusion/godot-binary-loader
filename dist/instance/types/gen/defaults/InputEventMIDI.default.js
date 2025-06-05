import { DefaultInputEvent } from './InputEvent.default';
export function DefaultInputEventMIDI(item) {
    DefaultInputEvent(item);
    item.channel ?? (item.channel = 0);
    item.controller_number ?? (item.controller_number = 0);
    item.controller_value ?? (item.controller_value = 0);
    item.instrument ?? (item.instrument = 0);
    item.message ?? (item.message = 0);
    item.pitch ?? (item.pitch = 0);
    item.pressure ?? (item.pressure = 0);
    item.velocity ?? (item.velocity = 0);
}
