/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultMesh } from './Mesh.default.js';
export function DefaultArrayMesh(item) {
    DefaultMesh(item);
    item.blend_shape_mode ?? (item.blend_shape_mode = 1);
    item.custom_aabb ?? (item.custom_aabb = create.AABB(0, 0, 0, 0, 0, 0));
    //shadow_mesh  
}
