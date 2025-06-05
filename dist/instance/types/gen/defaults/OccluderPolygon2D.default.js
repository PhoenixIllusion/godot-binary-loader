/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultResource } from './Resource.default';
export function DefaultOccluderPolygon2D(item) {
    DefaultResource(item);
    item.closed ?? (item.closed = true);
    item.cull_mode ?? (item.cull_mode = 0);
    item.polygon ?? (item.polygon = create.PackedVector2Array());
}
