import { DefaultControl } from './Control.default';
export function DefaultContainer(item) {
    DefaultControl(item);
    item.mouse_filter ?? (item.mouse_filter = 1);
}
