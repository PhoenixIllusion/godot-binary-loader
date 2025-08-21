import { DefaultResource } from './Resource.default.js';
export function DefaultFont(item) {
    DefaultResource(item);
    item.fallbacks ?? (item.fallbacks = []);
}
