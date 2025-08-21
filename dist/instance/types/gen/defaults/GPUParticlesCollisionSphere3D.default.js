import { DefaultGPUParticlesCollision3D } from './GPUParticlesCollision3D.default.js';
export function DefaultGPUParticlesCollisionSphere3D(item) {
    DefaultGPUParticlesCollision3D(item);
    item.radius ?? (item.radius = 1.0);
}
