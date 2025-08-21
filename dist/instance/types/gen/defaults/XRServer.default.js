/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultObject } from './Object.default.js';
export function DefaultXRServer(item) {
    DefaultObject(item);
    //primary_interface
    item.world_origin ?? (item.world_origin = create.Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0));
    item.world_scale ?? (item.world_scale = 1.0);
}
