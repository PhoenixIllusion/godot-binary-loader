/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default';
export function DefaultAnimatedSprite2D(item) {
    DefaultNode2D(item);
    item.animation ?? (item.animation = "default");
    item.autoplay ?? (item.autoplay = "");
    item.centered ?? (item.centered = true);
    item.flip_h ?? (item.flip_h = false);
    item.flip_v ?? (item.flip_v = false);
    item.frame ?? (item.frame = 0);
    item.frame_progress ?? (item.frame_progress = 0.0);
    item.offset ?? (item.offset = create.Vector2(0, 0));
    item.speed_scale ?? (item.speed_scale = 1.0);
    //sprite_frames  
}
