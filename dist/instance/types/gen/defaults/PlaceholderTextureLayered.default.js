/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultTextureLayered } from './TextureLayered.default';
export function DefaultPlaceholderTextureLayered(item) {
    DefaultTextureLayered(item);
    item.layers ?? (item.layers = 1);
    item.size ?? (item.size = create.Vector2i(1, 1));
}
