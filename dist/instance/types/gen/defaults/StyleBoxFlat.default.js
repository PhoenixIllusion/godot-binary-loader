/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultStyleBox } from './StyleBox.default';
export function DefaultStyleBoxFlat(item) {
    DefaultStyleBox(item);
    item.anti_aliasing ?? (item.anti_aliasing = true);
    item.anti_aliasing_size ?? (item.anti_aliasing_size = 1.0);
    item.bg_color ?? (item.bg_color = create.Color(0.6, 0.6, 0.6, 1));
    item.border_blend ?? (item.border_blend = false);
    item.border_color ?? (item.border_color = create.Color(0.8, 0.8, 0.8, 1));
    item.border_width_bottom ?? (item.border_width_bottom = 0);
    item.border_width_left ?? (item.border_width_left = 0);
    item.border_width_right ?? (item.border_width_right = 0);
    item.border_width_top ?? (item.border_width_top = 0);
    item.corner_detail ?? (item.corner_detail = 8);
    item.corner_radius_bottom_left ?? (item.corner_radius_bottom_left = 0);
    item.corner_radius_bottom_right ?? (item.corner_radius_bottom_right = 0);
    item.corner_radius_top_left ?? (item.corner_radius_top_left = 0);
    item.corner_radius_top_right ?? (item.corner_radius_top_right = 0);
    item.draw_center ?? (item.draw_center = true);
    item.expand_margin_bottom ?? (item.expand_margin_bottom = 0.0);
    item.expand_margin_left ?? (item.expand_margin_left = 0.0);
    item.expand_margin_right ?? (item.expand_margin_right = 0.0);
    item.expand_margin_top ?? (item.expand_margin_top = 0.0);
    item.shadow_color ?? (item.shadow_color = create.Color(0, 0, 0, 0.6));
    item.shadow_offset ?? (item.shadow_offset = create.Vector2(0, 0));
    item.shadow_size ?? (item.shadow_size = 0);
    item.skew ?? (item.skew = create.Vector2(0, 0));
}
