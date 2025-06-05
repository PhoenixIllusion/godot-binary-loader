/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode3D } from './Node3D.default';
export function DefaultCamera3D(item) {
    DefaultNode3D(item);
    //attributes
    //compositor
    item.cull_mask ?? (item.cull_mask = 1048575);
    item.current ?? (item.current = false);
    item.doppler_tracking ?? (item.doppler_tracking = 0);
    //environment
    item.far ?? (item.far = 4000.0);
    item.fov ?? (item.fov = 75.0);
    item.frustum_offset ?? (item.frustum_offset = create.Vector2(0, 0));
    item.h_offset ?? (item.h_offset = 0.0);
    item.keep_aspect ?? (item.keep_aspect = 1);
    item.near ?? (item.near = 0.05);
    item.projection ?? (item.projection = 0);
    item.size ?? (item.size = 1.0);
    item.v_offset ?? (item.v_offset = 0.0);
}
