import { DefaultResource } from './Resource.default';
export function DefaultTranslation(item) {
    DefaultResource(item);
    item.locale ?? (item.locale = "en");
}
