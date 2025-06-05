import { DefaultResource } from './Resource.default';
export function DefaultShortcut(item) {
    DefaultResource(item);
    item.events ?? (item.events = []);
}
