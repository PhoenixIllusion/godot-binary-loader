/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultMesh } from './Mesh.default.js';
export function DefaultPrimitiveMesh(item) {
    DefaultMesh(item);
    item.add_uv2 ?? (item.add_uv2 = false);
    item.custom_aabb ?? (item.custom_aabb = create.AABB(0, 0, 0, 0, 0, 0));
    item.flip_faces ?? (item.flip_faces = false);
    //material
    item.uv2_padding ?? (item.uv2_padding = 2.0);
}
