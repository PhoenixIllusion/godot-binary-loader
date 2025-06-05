import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeIntOp(item) {
    DefaultVisualShaderNode(item);
    item.operator ?? (item.operator = 0);
}
