/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultTexture2D } from './Texture2D.default.js';
export function DefaultGradientTexture2D(item) {
    DefaultTexture2D(item);
    item.fill ?? (item.fill = 0);
    item.fill_from ?? (item.fill_from = create.Vector2(0, 0));
    item.fill_to ?? (item.fill_to = create.Vector2(1, 0));
    //gradient
    item.height ?? (item.height = 64);
    item.repeat ?? (item.repeat = 0);
    item.resource_local_to_scene ?? (item.resource_local_to_scene = false);
    item.use_hdr ?? (item.use_hdr = false);
    item.width ?? (item.width = 64);
}
