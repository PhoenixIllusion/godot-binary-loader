import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeParticleRandomness(item) {
    DefaultVisualShaderNode(item);
    item.op_type ?? (item.op_type = 0);
}
