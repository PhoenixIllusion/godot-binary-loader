/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultTexture2D } from './Texture2D.default.js';
export function DefaultCanvasTexture(item) {
    DefaultTexture2D(item);
    //diffuse_texture
    //normal_texture
    item.resource_local_to_scene ?? (item.resource_local_to_scene = false);
    item.specular_color ?? (item.specular_color = create.Color(1, 1, 1, 1));
    item.specular_shininess ?? (item.specular_shininess = 1.0);
    //specular_texture
    item.texture_filter ?? (item.texture_filter = 0);
    item.texture_repeat ?? (item.texture_repeat = 0);
}
