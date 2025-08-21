import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeRemap(item) {
    DefaultVisualShaderNode(item);
    item.op_type ?? (item.op_type = 0);
}
