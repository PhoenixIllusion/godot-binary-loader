import { DefaultResource } from './Resource.default.js';
export function DefaultShortcut(item) {
    DefaultResource(item);
    item.events ?? (item.events = []);
}
