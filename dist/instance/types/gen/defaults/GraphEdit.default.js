/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultControl } from './Control.default';
export function DefaultGraphEdit(item) {
    DefaultControl(item);
    item.clip_contents ?? (item.clip_contents = true);
    item.connection_lines_antialiased ?? (item.connection_lines_antialiased = true);
    item.connection_lines_curvature ?? (item.connection_lines_curvature = 0.5);
    item.connection_lines_thickness ?? (item.connection_lines_thickness = 4.0);
    item.focus_mode ?? (item.focus_mode = 2);
    item.grid_pattern ?? (item.grid_pattern = 0);
    item.minimap_enabled ?? (item.minimap_enabled = true);
    item.minimap_opacity ?? (item.minimap_opacity = 0.65);
    item.minimap_size ?? (item.minimap_size = create.Vector2(240, 160));
    item.panning_scheme ?? (item.panning_scheme = 0);
    item.right_disconnects ?? (item.right_disconnects = false);
    item.scroll_offset ?? (item.scroll_offset = create.Vector2(0, 0));
    item.show_arrange_button ?? (item.show_arrange_button = true);
    item.show_grid ?? (item.show_grid = true);
    item.show_grid_buttons ?? (item.show_grid_buttons = true);
    item.show_menu ?? (item.show_menu = true);
    item.show_minimap_button ?? (item.show_minimap_button = true);
    item.show_zoom_buttons ?? (item.show_zoom_buttons = true);
    item.show_zoom_label ?? (item.show_zoom_label = false);
    item.snapping_distance ?? (item.snapping_distance = 20);
    item.snapping_enabled ?? (item.snapping_enabled = true);
    item.zoom ?? (item.zoom = 1.0);
    item.zoom_max ?? (item.zoom_max = 2.0736);
    item.zoom_min ?? (item.zoom_min = 0.232568);
    item.zoom_step ?? (item.zoom_step = 1.2);
}
