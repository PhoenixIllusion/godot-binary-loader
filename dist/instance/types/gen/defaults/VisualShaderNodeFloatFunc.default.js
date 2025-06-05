import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeFloatFunc(item) {
    DefaultVisualShaderNode(item);
    item.function ?? (item.function = 13);
}
