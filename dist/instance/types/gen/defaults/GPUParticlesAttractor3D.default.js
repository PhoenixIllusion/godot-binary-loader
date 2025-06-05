import { DefaultVisualInstance3D } from './VisualInstance3D.default';
export function DefaultGPUParticlesAttractor3D(item) {
    DefaultVisualInstance3D(item);
    item.attenuation ?? (item.attenuation = 1.0);
    item.cull_mask ?? (item.cull_mask = 4294967295);
    item.directionality ?? (item.directionality = 0.0);
    item.strength ?? (item.strength = 1.0);
}
