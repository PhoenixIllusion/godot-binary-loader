import { DefaultObject } from './Object.default';
export function DefaultThemeDB(item) {
    DefaultObject(item);
    item.fallback_base_scale ?? (item.fallback_base_scale = 1.0);
    //fallback_font
    item.fallback_font_size ?? (item.fallback_font_size = 16);
    //fallback_icon
    //fallback_stylebox  
}
