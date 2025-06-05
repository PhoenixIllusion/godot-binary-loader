/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisualInstance3D } from './VisualInstance3D.default';
export function DefaultVoxelGI(item) {
    DefaultVisualInstance3D(item);
    //camera_attributes
    //data
    item.size ?? (item.size = create.Vector3(20, 20, 20));
    item.subdiv ?? (item.subdiv = 1);
}
