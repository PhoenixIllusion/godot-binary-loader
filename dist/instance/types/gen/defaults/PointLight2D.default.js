/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultLight2D } from './Light2D.default';
export function DefaultPointLight2D(item) {
    DefaultLight2D(item);
    item.height ?? (item.height = 0.0);
    item.offset ?? (item.offset = create.Vector2(0, 0));
    //texture
    item.texture_scale ?? (item.texture_scale = 1.0);
}
