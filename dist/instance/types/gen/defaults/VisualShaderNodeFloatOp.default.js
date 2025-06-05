import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeFloatOp(item) {
    DefaultVisualShaderNode(item);
    item.operator ?? (item.operator = 0);
}
