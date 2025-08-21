/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultCanvasItem } from './CanvasItem.default.js';
export function DefaultControl(item) {
    DefaultCanvasItem(item);
    item.anchor_bottom ?? (item.anchor_bottom = 0.0);
    item.anchor_left ?? (item.anchor_left = 0.0);
    item.anchor_right ?? (item.anchor_right = 0.0);
    item.anchor_top ?? (item.anchor_top = 0.0);
    //auto_translate
    item.clip_contents ?? (item.clip_contents = false);
    item.custom_minimum_size ?? (item.custom_minimum_size = create.Vector2(0, 0));
    item.focus_mode ?? (item.focus_mode = 0);
    item.focus_neighbor_bottom ?? (item.focus_neighbor_bottom = create.NodePath(""));
    item.focus_neighbor_left ?? (item.focus_neighbor_left = create.NodePath(""));
    item.focus_neighbor_right ?? (item.focus_neighbor_right = create.NodePath(""));
    item.focus_neighbor_top ?? (item.focus_neighbor_top = create.NodePath(""));
    item.focus_next ?? (item.focus_next = create.NodePath(""));
    item.focus_previous ?? (item.focus_previous = create.NodePath(""));
    //global_position
    item.grow_horizontal ?? (item.grow_horizontal = 1);
    item.grow_vertical ?? (item.grow_vertical = 1);
    item.layout_direction ?? (item.layout_direction = 0);
    item.localize_numeral_system ?? (item.localize_numeral_system = true);
    item.mouse_default_cursor_shape ?? (item.mouse_default_cursor_shape = 0);
    item.mouse_filter ?? (item.mouse_filter = 0);
    item.mouse_force_pass_scroll_events ?? (item.mouse_force_pass_scroll_events = true);
    item.offset_bottom ?? (item.offset_bottom = 0.0);
    item.offset_left ?? (item.offset_left = 0.0);
    item.offset_right ?? (item.offset_right = 0.0);
    item.offset_top ?? (item.offset_top = 0.0);
    item.physics_interpolation_mode ?? (item.physics_interpolation_mode = 2);
    item.pivot_offset ?? (item.pivot_offset = create.Vector2(0, 0));
    item.position ?? (item.position = create.Vector2(0, 0));
    item.rotation ?? (item.rotation = 0.0);
    //rotation_degrees
    item.scale ?? (item.scale = create.Vector2(1, 1));
    //shortcut_context
    item.size ?? (item.size = create.Vector2(0, 0));
    item.size_flags_horizontal ?? (item.size_flags_horizontal = 1);
    item.size_flags_stretch_ratio ?? (item.size_flags_stretch_ratio = 1.0);
    item.size_flags_vertical ?? (item.size_flags_vertical = 1);
    //theme
    item.theme_type_variation ?? (item.theme_type_variation = "");
    item.tooltip_auto_translate_mode ?? (item.tooltip_auto_translate_mode = 0);
    item.tooltip_text ?? (item.tooltip_text = "");
}
