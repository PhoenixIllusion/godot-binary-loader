import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeParticleAccelerator(item) {
    DefaultVisualShaderNode(item);
    item.mode ?? (item.mode = 0);
}
