import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeParticleEmit(item) {
    DefaultVisualShaderNode(item);
    item.flags ?? (item.flags = 31);
}
