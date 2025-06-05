import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeTransformOp(item) {
    DefaultVisualShaderNode(item);
    item.operator ?? (item.operator = 0);
}
