import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeParticleAccelerator(item) {
    DefaultVisualShaderNode(item);
    item.mode ?? (item.mode = 0);
}
