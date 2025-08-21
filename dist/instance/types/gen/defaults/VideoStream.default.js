import { DefaultResource } from './Resource.default.js';
export function DefaultVideoStream(item) {
    DefaultResource(item);
    item.file ?? (item.file = "");
}
