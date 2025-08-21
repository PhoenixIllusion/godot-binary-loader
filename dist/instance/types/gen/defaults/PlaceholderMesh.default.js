/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultMesh } from './Mesh.default.js';
export function DefaultPlaceholderMesh(item) {
    DefaultMesh(item);
    item.aabb ?? (item.aabb = create.AABB(0, 0, 0, 0, 0, 0));
}
