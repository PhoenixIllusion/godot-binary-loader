import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeTransformOp(item) {
    DefaultVisualShaderNode(item);
    item.operator ?? (item.operator = 0);
}
