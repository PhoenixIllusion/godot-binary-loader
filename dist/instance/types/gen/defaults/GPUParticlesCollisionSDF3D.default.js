/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultGPUParticlesCollision3D } from './GPUParticlesCollision3D.default';
export function DefaultGPUParticlesCollisionSDF3D(item) {
    DefaultGPUParticlesCollision3D(item);
    item.bake_mask ?? (item.bake_mask = 4294967295);
    item.resolution ?? (item.resolution = 2);
    item.size ?? (item.size = create.Vector3(2, 2, 2));
    //texture
    item.thickness ?? (item.thickness = 1.0);
}
