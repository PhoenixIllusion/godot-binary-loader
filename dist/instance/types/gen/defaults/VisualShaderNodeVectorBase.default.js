import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeVectorBase(item) {
    DefaultVisualShaderNode(item);
    item.op_type ?? (item.op_type = 1);
}
