/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultObject } from './Object.default';
export function DefaultTileData(item) {
    DefaultObject(item);
    item.flip_h ?? (item.flip_h = false);
    item.flip_v ?? (item.flip_v = false);
    //material
    item.modulate ?? (item.modulate = create.Color(1, 1, 1, 1));
    item.probability ?? (item.probability = 1.0);
    item.terrain ?? (item.terrain = -1);
    item.terrain_set ?? (item.terrain_set = -1);
    item.texture_origin ?? (item.texture_origin = create.Vector2i(0, 0));
    item.transpose ?? (item.transpose = false);
    item.y_sort_origin ?? (item.y_sort_origin = 0);
    item.z_index ?? (item.z_index = 0);
}
