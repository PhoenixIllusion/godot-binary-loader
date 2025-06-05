/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultControl } from './Control.default';
export function DefaultNinePatchRect(item) {
    DefaultControl(item);
    item.axis_stretch_horizontal ?? (item.axis_stretch_horizontal = 0);
    item.axis_stretch_vertical ?? (item.axis_stretch_vertical = 0);
    item.draw_center ?? (item.draw_center = true);
    item.mouse_filter ?? (item.mouse_filter = 2);
    item.patch_margin_bottom ?? (item.patch_margin_bottom = 0);
    item.patch_margin_left ?? (item.patch_margin_left = 0);
    item.patch_margin_right ?? (item.patch_margin_right = 0);
    item.patch_margin_top ?? (item.patch_margin_top = 0);
    item.region_rect ?? (item.region_rect = create.Rect2(0, 0, 0, 0));
    //texture  
}
