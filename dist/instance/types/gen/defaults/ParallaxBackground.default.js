/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultCanvasLayer } from './CanvasLayer.default';
export function DefaultParallaxBackground(item) {
    DefaultCanvasLayer(item);
    item.layer ?? (item.layer = -100);
    item.scroll_base_offset ?? (item.scroll_base_offset = create.Vector2(0, 0));
    item.scroll_base_scale ?? (item.scroll_base_scale = create.Vector2(1, 1));
    item.scroll_ignore_camera_zoom ?? (item.scroll_ignore_camera_zoom = false);
    item.scroll_limit_begin ?? (item.scroll_limit_begin = create.Vector2(0, 0));
    item.scroll_limit_end ?? (item.scroll_limit_end = create.Vector2(0, 0));
    item.scroll_offset ?? (item.scroll_offset = create.Vector2(0, 0));
}
