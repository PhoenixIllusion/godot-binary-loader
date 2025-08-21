/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultResource } from './Resource.default.js';
export function DefaultTileSet(item) {
    DefaultResource(item);
    item.tile_layout ?? (item.tile_layout = 0);
    item.tile_offset_axis ?? (item.tile_offset_axis = 0);
    item.tile_shape ?? (item.tile_shape = 0);
    item.tile_size ?? (item.tile_size = create.Vector2i(16, 16));
    item.uv_clipping ?? (item.uv_clipping = false);
}
