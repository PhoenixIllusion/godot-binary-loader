/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultTexture2D } from './Texture2D.default';
export function DefaultExternalTexture(item) {
    DefaultTexture2D(item);
    item.resource_local_to_scene ?? (item.resource_local_to_scene = false);
    item.size ?? (item.size = create.Vector2(256, 256));
}
