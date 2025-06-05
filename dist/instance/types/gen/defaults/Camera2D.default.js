/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default';
export function DefaultCamera2D(item) {
    DefaultNode2D(item);
    item.anchor_mode ?? (item.anchor_mode = 1);
    //custom_viewport
    item.drag_bottom_margin ?? (item.drag_bottom_margin = 0.2);
    item.drag_horizontal_enabled ?? (item.drag_horizontal_enabled = false);
    item.drag_horizontal_offset ?? (item.drag_horizontal_offset = 0.0);
    item.drag_left_margin ?? (item.drag_left_margin = 0.2);
    item.drag_right_margin ?? (item.drag_right_margin = 0.2);
    item.drag_top_margin ?? (item.drag_top_margin = 0.2);
    item.drag_vertical_enabled ?? (item.drag_vertical_enabled = false);
    item.drag_vertical_offset ?? (item.drag_vertical_offset = 0.0);
    item.editor_draw_drag_margin ?? (item.editor_draw_drag_margin = false);
    item.editor_draw_limits ?? (item.editor_draw_limits = false);
    item.editor_draw_screen ?? (item.editor_draw_screen = true);
    item.enabled ?? (item.enabled = true);
    item.ignore_rotation ?? (item.ignore_rotation = true);
    item.limit_bottom ?? (item.limit_bottom = 10000000);
    item.limit_left ?? (item.limit_left = -10000000);
    item.limit_right ?? (item.limit_right = 10000000);
    item.limit_smoothed ?? (item.limit_smoothed = false);
    item.limit_top ?? (item.limit_top = -10000000);
    item.offset ?? (item.offset = create.Vector2(0, 0));
    item.position_smoothing_enabled ?? (item.position_smoothing_enabled = false);
    item.position_smoothing_speed ?? (item.position_smoothing_speed = 5.0);
    item.process_callback ?? (item.process_callback = 1);
    item.rotation_smoothing_enabled ?? (item.rotation_smoothing_enabled = false);
    item.rotation_smoothing_speed ?? (item.rotation_smoothing_speed = 5.0);
    item.zoom ?? (item.zoom = create.Vector2(1, 1));
}
