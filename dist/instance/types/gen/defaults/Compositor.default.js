import { DefaultResource } from './Resource.default';
export function DefaultCompositor(item) {
    DefaultResource(item);
    item.compositor_effects ?? (item.compositor_effects = []);
}
