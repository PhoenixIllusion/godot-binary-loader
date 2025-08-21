import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeColorFunc(item) {
    DefaultVisualShaderNode(item);
    item.function ?? (item.function = 0);
}
