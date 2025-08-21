import { DefaultResource } from './Resource.default.js';
export function DefaultStyleBox(item) {
    DefaultResource(item);
    item.content_margin_bottom ?? (item.content_margin_bottom = -1.0);
    item.content_margin_left ?? (item.content_margin_left = -1.0);
    item.content_margin_right ?? (item.content_margin_right = -1.0);
    item.content_margin_top ?? (item.content_margin_top = -1.0);
}
