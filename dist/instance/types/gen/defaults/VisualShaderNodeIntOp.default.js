import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeIntOp(item) {
    DefaultVisualShaderNode(item);
    item.operator ?? (item.operator = 0);
}
