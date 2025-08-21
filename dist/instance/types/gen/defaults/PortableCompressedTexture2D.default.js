/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultTexture2D } from './Texture2D.default.js';
export function DefaultPortableCompressedTexture2D(item) {
    DefaultTexture2D(item);
    item.keep_compressed_buffer ?? (item.keep_compressed_buffer = false);
    item.resource_local_to_scene ?? (item.resource_local_to_scene = false);
    item.size_override ?? (item.size_override = create.Vector2(0, 0));
}
