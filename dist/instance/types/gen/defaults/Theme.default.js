import { DefaultResource } from './Resource.default.js';
export function DefaultTheme(item) {
    DefaultResource(item);
    item.default_base_scale ?? (item.default_base_scale = 0.0);
    //default_font
    item.default_font_size ?? (item.default_font_size = -1);
}
