import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeFloatOp(item) {
    DefaultVisualShaderNode(item);
    item.operator ?? (item.operator = 0);
}
