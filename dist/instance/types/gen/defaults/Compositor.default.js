import { DefaultResource } from './Resource.default.js';
export function DefaultCompositor(item) {
    DefaultResource(item);
    item.compositor_effects ?? (item.compositor_effects = []);
}
