import { DefaultResource } from './Resource.default.js';
export function DefaultInputEvent(item) {
    DefaultResource(item);
    item.device ?? (item.device = 0);
}
