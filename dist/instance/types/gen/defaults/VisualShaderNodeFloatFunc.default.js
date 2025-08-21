import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeFloatFunc(item) {
    DefaultVisualShaderNode(item);
    item.function ?? (item.function = 13);
}
