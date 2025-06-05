import { DefaultResource } from './Resource.default';
export function DefaultVideoStream(item) {
    DefaultResource(item);
    item.file ?? (item.file = "");
}
