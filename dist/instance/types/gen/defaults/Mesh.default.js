/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultResource } from './Resource.default.js';
export function DefaultMesh(item) {
    DefaultResource(item);
    item.lightmap_size_hint ?? (item.lightmap_size_hint = create.Vector2i(0, 0));
}
