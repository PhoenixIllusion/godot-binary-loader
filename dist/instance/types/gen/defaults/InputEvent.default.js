import { DefaultResource } from './Resource.default';
export function DefaultInputEvent(item) {
    DefaultResource(item);
    item.device ?? (item.device = 0);
}
