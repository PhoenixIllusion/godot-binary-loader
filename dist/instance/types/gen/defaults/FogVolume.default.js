/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisualInstance3D } from './VisualInstance3D.default';
export function DefaultFogVolume(item) {
    DefaultVisualInstance3D(item);
    //material
    item.shape ?? (item.shape = 3);
    item.size ?? (item.size = create.Vector3(2, 2, 2));
}
