import { DefaultControl } from './Control.default.js';
export function DefaultContainer(item) {
    DefaultControl(item);
    item.mouse_filter ?? (item.mouse_filter = 1);
}
