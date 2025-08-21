import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeParticleEmit(item) {
    DefaultVisualShaderNode(item);
    item.flags ?? (item.flags = 31);
}
