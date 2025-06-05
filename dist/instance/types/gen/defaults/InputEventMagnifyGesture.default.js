import { DefaultInputEventGesture } from './InputEventGesture.default';
export function DefaultInputEventMagnifyGesture(item) {
    DefaultInputEventGesture(item);
    item.factor ?? (item.factor = 1.0);
}
