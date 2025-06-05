import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeColorFunc(item) {
    DefaultVisualShaderNode(item);
    item.function ?? (item.function = 0);
}
