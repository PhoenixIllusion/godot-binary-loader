import { DefaultNode2D } from './Node2D.default.js';
export function DefaultTouchScreenButton(item) {
    DefaultNode2D(item);
    item.action ?? (item.action = "");
    //bitmask
    item.passby_press ?? (item.passby_press = false);
    //shape
    item.shape_centered ?? (item.shape_centered = true);
    item.shape_visible ?? (item.shape_visible = true);
    //texture_normal
    //texture_pressed
    item.visibility_mode ?? (item.visibility_mode = 0);
}
