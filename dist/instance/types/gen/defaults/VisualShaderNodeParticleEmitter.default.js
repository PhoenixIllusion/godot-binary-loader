import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeParticleEmitter(item) {
    DefaultVisualShaderNode(item);
    item.mode_2d ?? (item.mode_2d = false);
}
