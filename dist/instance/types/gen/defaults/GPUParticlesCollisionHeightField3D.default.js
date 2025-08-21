/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultGPUParticlesCollision3D } from './GPUParticlesCollision3D.default.js';
export function DefaultGPUParticlesCollisionHeightField3D(item) {
    DefaultGPUParticlesCollision3D(item);
    item.follow_camera_enabled ?? (item.follow_camera_enabled = false);
    item.resolution ?? (item.resolution = 2);
    item.size ?? (item.size = create.Vector3(2, 2, 2));
    item.update_mode ?? (item.update_mode = 0);
}
