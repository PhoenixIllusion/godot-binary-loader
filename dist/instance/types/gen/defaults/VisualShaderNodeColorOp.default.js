import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeColorOp(item) {
    DefaultVisualShaderNode(item);
    item.operator ?? (item.operator = 0);
}
