/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultTexture2D } from './Texture2D.default.js';
export function DefaultAtlasTexture(item) {
    DefaultTexture2D(item);
    //atlas
    item.filter_clip ?? (item.filter_clip = false);
    item.margin ?? (item.margin = create.Rect2(0, 0, 0, 0));
    item.region ?? (item.region = create.Rect2(0, 0, 0, 0));
    item.resource_local_to_scene ?? (item.resource_local_to_scene = false);
}
