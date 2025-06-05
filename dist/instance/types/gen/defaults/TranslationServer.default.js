import { DefaultObject } from './Object.default';
export function DefaultTranslationServer(item) {
    DefaultObject(item);
    item.pseudolocalization_enabled ?? (item.pseudolocalization_enabled = false);
}
