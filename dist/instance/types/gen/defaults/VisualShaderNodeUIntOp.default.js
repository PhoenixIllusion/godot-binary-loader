import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeUIntOp(item) {
    DefaultVisualShaderNode(item);
    item.operator ?? (item.operator = 0);
}
