import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeStep(item) {
    DefaultVisualShaderNode(item);
    item.op_type ?? (item.op_type = 0);
}
