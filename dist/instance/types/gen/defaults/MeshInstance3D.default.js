/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultGeometryInstance3D } from './GeometryInstance3D.default.js';
export function DefaultMeshInstance3D(item) {
    DefaultGeometryInstance3D(item);
    //mesh
    item.skeleton ?? (item.skeleton = create.NodePath(".."));
    //skin  
}
