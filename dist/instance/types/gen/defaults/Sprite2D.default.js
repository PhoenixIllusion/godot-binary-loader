/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default';
export function DefaultSprite2D(item) {
    DefaultNode2D(item);
    item.centered ?? (item.centered = true);
    item.flip_h ?? (item.flip_h = false);
    item.flip_v ?? (item.flip_v = false);
    item.frame ?? (item.frame = 0);
    item.frame_coords ?? (item.frame_coords = create.Vector2i(0, 0));
    item.hframes ?? (item.hframes = 1);
    item.offset ?? (item.offset = create.Vector2(0, 0));
    item.region_enabled ?? (item.region_enabled = false);
    item.region_filter_clip_enabled ?? (item.region_filter_clip_enabled = false);
    item.region_rect ?? (item.region_rect = create.Rect2(0, 0, 0, 0));
    //texture
    item.vframes ?? (item.vframes = 1);
}
