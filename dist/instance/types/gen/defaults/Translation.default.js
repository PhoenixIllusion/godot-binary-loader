import { DefaultResource } from './Resource.default.js';
export function DefaultTranslation(item) {
    DefaultResource(item);
    item.locale ?? (item.locale = "en");
}
