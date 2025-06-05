/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultGPUParticlesCollision3D } from './GPUParticlesCollision3D.default';
export function DefaultGPUParticlesCollisionBox3D(item) {
    DefaultGPUParticlesCollision3D(item);
    item.size ?? (item.size = create.Vector3(2, 2, 2));
}
