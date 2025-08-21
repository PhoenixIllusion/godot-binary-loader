/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultGPUParticlesAttractor3D } from './GPUParticlesAttractor3D.default.js';
export function DefaultGPUParticlesAttractorBox3D(item) {
    DefaultGPUParticlesAttractor3D(item);
    item.size ?? (item.size = create.Vector3(2, 2, 2));
}
