import { DefaultNode2D } from './Node2D.default.js';
export function DefaultCanvasGroup(item) {
    DefaultNode2D(item);
    item.clear_margin ?? (item.clear_margin = 10.0);
    item.fit_margin ?? (item.fit_margin = 10.0);
    item.use_mipmaps ?? (item.use_mipmaps = false);
}
