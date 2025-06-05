/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultRange } from './Range.default';
export function DefaultTextureProgressBar(item) {
    DefaultRange(item);
    item.fill_mode ?? (item.fill_mode = 0);
    item.mouse_filter ?? (item.mouse_filter = 1);
    item.nine_patch_stretch ?? (item.nine_patch_stretch = false);
    item.radial_center_offset ?? (item.radial_center_offset = create.Vector2(0, 0));
    item.radial_fill_degrees ?? (item.radial_fill_degrees = 360.0);
    item.radial_initial_angle ?? (item.radial_initial_angle = 0.0);
    item.size_flags_vertical ?? (item.size_flags_vertical = 1);
    item.step ?? (item.step = 1.0);
    item.stretch_margin_bottom ?? (item.stretch_margin_bottom = 0);
    item.stretch_margin_left ?? (item.stretch_margin_left = 0);
    item.stretch_margin_right ?? (item.stretch_margin_right = 0);
    item.stretch_margin_top ?? (item.stretch_margin_top = 0);
    //texture_over
    //texture_progress
    item.texture_progress_offset ?? (item.texture_progress_offset = create.Vector2(0, 0));
    //texture_under
    item.tint_over ?? (item.tint_over = create.Color(1, 1, 1, 1));
    item.tint_progress ?? (item.tint_progress = create.Color(1, 1, 1, 1));
    item.tint_under ?? (item.tint_under = create.Color(1, 1, 1, 1));
}
