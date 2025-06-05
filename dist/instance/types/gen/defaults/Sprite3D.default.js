/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultSpriteBase3D } from './SpriteBase3D.default';
export function DefaultSprite3D(item) {
    DefaultSpriteBase3D(item);
    item.frame ?? (item.frame = 0);
    item.frame_coords ?? (item.frame_coords = create.Vector2i(0, 0));
    item.hframes ?? (item.hframes = 1);
    item.region_enabled ?? (item.region_enabled = false);
    item.region_rect ?? (item.region_rect = create.Rect2(0, 0, 0, 0));
    //texture
    item.vframes ?? (item.vframes = 1);
}
