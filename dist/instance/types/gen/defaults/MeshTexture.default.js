/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultTexture2D } from './Texture2D.default';
export function DefaultMeshTexture(item) {
    DefaultTexture2D(item);
    //base_texture
    item.image_size ?? (item.image_size = create.Vector2(0, 0));
    //mesh
    item.resource_local_to_scene ?? (item.resource_local_to_scene = false);
}
