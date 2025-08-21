import { DefaultVisualShaderNodeParticleEmitter } from './VisualShaderNodeParticleEmitter.default.js';
export function DefaultVisualShaderNodeParticleMeshEmitter(item) {
    DefaultVisualShaderNodeParticleEmitter(item);
    //mesh
    item.surface_index ?? (item.surface_index = 0);
    item.use_all_surfaces ?? (item.use_all_surfaces = true);
}
