import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeColorOp(item) {
    DefaultVisualShaderNode(item);
    item.operator ?? (item.operator = 0);
}
