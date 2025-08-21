/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultViewport } from './Viewport.default';
export function DefaultWindow(item) {
    DefaultViewport(item);
    item.always_on_top ?? (item.always_on_top = false);
    item.auto_translate ?? (item.auto_translate = true);
    item.borderless ?? (item.borderless = false);
    item.content_scale_aspect ?? (item.content_scale_aspect = 0);
    item.content_scale_factor ?? (item.content_scale_factor = 1.0);
    item.content_scale_mode ?? (item.content_scale_mode = 0);
    item.content_scale_size ?? (item.content_scale_size = create.Vector2i(0, 0));
    item.content_scale_stretch ?? (item.content_scale_stretch = 0);
    //current_screen
    item.exclusive ?? (item.exclusive = false);
    item.extend_to_title ?? (item.extend_to_title = false);
    item.force_native ?? (item.force_native = false);
    item.initial_position ?? (item.initial_position = 0);
    item.keep_title_visible ?? (item.keep_title_visible = false);
    item.max_size ?? (item.max_size = create.Vector2i(0, 0));
    item.min_size ?? (item.min_size = create.Vector2i(0, 0));
    item.mode ?? (item.mode = 0);
    item.mouse_passthrough ?? (item.mouse_passthrough = false);
    item.mouse_passthrough_polygon ?? (item.mouse_passthrough_polygon = create.PackedVector2Array());
    item.popup_window ?? (item.popup_window = false);
    item.position ?? (item.position = create.Vector2i(0, 0));
    item.sharp_corners ?? (item.sharp_corners = false);
    item.size ?? (item.size = create.Vector2i(100, 100));
    //theme
    item.theme_type_variation ?? (item.theme_type_variation = "");
    item.title ?? (item.title = "");
    item.transient ?? (item.transient = false);
    item.transient_to_focused ?? (item.transient_to_focused = false);
    item.transparent ?? (item.transparent = false);
    item.unfocusable ?? (item.unfocusable = false);
    item.unresizable ?? (item.unresizable = false);
    item.visible ?? (item.visible = true);
    item.wrap_controls ?? (item.wrap_controls = false);
    //title_color
    //title_outline_modulate
    //close_h_offset
    //close_v_offset
    //resize_margin
    //title_height
    //title_outline_size
    //title_font
    //title_font_size
    //close
    //close_pressed
    //embedded_border
    //embedded_unfocused_border  
}
