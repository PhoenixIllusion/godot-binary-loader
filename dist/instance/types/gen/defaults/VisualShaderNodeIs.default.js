import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeIs(item) {
    DefaultVisualShaderNode(item);
    item.function ?? (item.function = 0);
}
