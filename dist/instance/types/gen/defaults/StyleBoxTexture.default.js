/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultStyleBox } from './StyleBox.default.js';
export function DefaultStyleBoxTexture(item) {
    DefaultStyleBox(item);
    item.axis_stretch_horizontal ?? (item.axis_stretch_horizontal = 0);
    item.axis_stretch_vertical ?? (item.axis_stretch_vertical = 0);
    item.draw_center ?? (item.draw_center = true);
    item.expand_margin_bottom ?? (item.expand_margin_bottom = 0.0);
    item.expand_margin_left ?? (item.expand_margin_left = 0.0);
    item.expand_margin_right ?? (item.expand_margin_right = 0.0);
    item.expand_margin_top ?? (item.expand_margin_top = 0.0);
    item.modulate_color ?? (item.modulate_color = create.Color(1, 1, 1, 1));
    item.region_rect ?? (item.region_rect = create.Rect2(0, 0, 0, 0));
    //texture
    item.texture_margin_bottom ?? (item.texture_margin_bottom = 0.0);
    item.texture_margin_left ?? (item.texture_margin_left = 0.0);
    item.texture_margin_right ?? (item.texture_margin_right = 0.0);
    item.texture_margin_top ?? (item.texture_margin_top = 0.0);
}
