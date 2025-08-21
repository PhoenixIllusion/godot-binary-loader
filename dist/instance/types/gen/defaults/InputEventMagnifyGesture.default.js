import { DefaultInputEventGesture } from './InputEventGesture.default.js';
export function DefaultInputEventMagnifyGesture(item) {
    DefaultInputEventGesture(item);
    item.factor ?? (item.factor = 1.0);
}
