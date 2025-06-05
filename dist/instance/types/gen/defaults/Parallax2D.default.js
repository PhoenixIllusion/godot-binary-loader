/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default';
export function DefaultParallax2D(item) {
    DefaultNode2D(item);
    item.autoscroll ?? (item.autoscroll = create.Vector2(0, 0));
    item.follow_viewport ?? (item.follow_viewport = true);
    item.ignore_camera_scroll ?? (item.ignore_camera_scroll = false);
    item.limit_begin ?? (item.limit_begin = create.Vector2(-1e+07, -1e+07));
    item.limit_end ?? (item.limit_end = create.Vector2(1e+07, 1e+07));
    item.physics_interpolation_mode ?? (item.physics_interpolation_mode = 2);
    item.repeat_size ?? (item.repeat_size = create.Vector2(0, 0));
    item.repeat_times ?? (item.repeat_times = 1);
    item.screen_offset ?? (item.screen_offset = create.Vector2(0, 0));
    item.scroll_offset ?? (item.scroll_offset = create.Vector2(0, 0));
    item.scroll_scale ?? (item.scroll_scale = create.Vector2(1, 1));
}
