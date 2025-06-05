import { DefaultResource } from './Resource.default';
export function DefaultFont(item) {
    DefaultResource(item);
    item.fallbacks ?? (item.fallbacks = []);
}
