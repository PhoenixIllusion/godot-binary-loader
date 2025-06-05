import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeDerivativeFunc(item) {
    DefaultVisualShaderNode(item);
    item.function ?? (item.function = 0);
    item.op_type ?? (item.op_type = 0);
    item.precision ?? (item.precision = 0);
}
