import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeTransformVecMult(item) {
    DefaultVisualShaderNode(item);
    item.operator ?? (item.operator = 0);
}
