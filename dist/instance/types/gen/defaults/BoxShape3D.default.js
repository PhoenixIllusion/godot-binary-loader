/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultShape3D } from './Shape3D.default.js';
export function DefaultBoxShape3D(item) {
    DefaultShape3D(item);
    item.size ?? (item.size = create.Vector3(1, 1, 1));
}
