import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeIntFunc(item) {
    DefaultVisualShaderNode(item);
    item.function ?? (item.function = 2);
}
