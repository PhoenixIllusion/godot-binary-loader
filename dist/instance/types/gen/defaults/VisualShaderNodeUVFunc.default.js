import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeUVFunc(item) {
    DefaultVisualShaderNode(item);
    item.function ?? (item.function = 0);
}
