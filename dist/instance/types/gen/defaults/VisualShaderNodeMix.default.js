import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeMix(item) {
    DefaultVisualShaderNode(item);
    item.op_type ?? (item.op_type = 0);
}
