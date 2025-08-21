/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode3D } from './Node3D.default.js';
export function DefaultXRFaceModifier3D(item) {
    DefaultNode3D(item);
    item.face_tracker ?? (item.face_tracker = "/user/face_tracker");
    item.target ?? (item.target = create.NodePath(""));
}
