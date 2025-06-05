import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeTransformVecMult(item) {
    DefaultVisualShaderNode(item);
    item.operator ?? (item.operator = 0);
}
