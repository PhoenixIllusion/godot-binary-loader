import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeParticleMultiplyByAxisAngle(item) {
    DefaultVisualShaderNode(item);
    item.degrees_mode ?? (item.degrees_mode = true);
}
