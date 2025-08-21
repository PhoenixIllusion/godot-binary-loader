import { DefaultVisualInstance3D } from './VisualInstance3D.default.js';
export function DefaultGPUParticlesCollision3D(item) {
    DefaultVisualInstance3D(item);
    item.cull_mask ?? (item.cull_mask = 4294967295);
}
