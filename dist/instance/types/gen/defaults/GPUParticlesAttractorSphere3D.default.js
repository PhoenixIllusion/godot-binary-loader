import { DefaultGPUParticlesAttractor3D } from './GPUParticlesAttractor3D.default.js';
export function DefaultGPUParticlesAttractorSphere3D(item) {
    DefaultGPUParticlesAttractor3D(item);
    item.radius ?? (item.radius = 1.0);
}
