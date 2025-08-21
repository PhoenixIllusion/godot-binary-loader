import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeUIntOp(item) {
    DefaultVisualShaderNode(item);
    item.operator ?? (item.operator = 0);
}
