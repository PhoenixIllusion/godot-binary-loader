/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultShape3D } from './Shape3D.default';
export function DefaultWorldBoundaryShape3D(item) {
    DefaultShape3D(item);
    item.plane ?? (item.plane = create.Plane(0, 1, 0, 0));
}
