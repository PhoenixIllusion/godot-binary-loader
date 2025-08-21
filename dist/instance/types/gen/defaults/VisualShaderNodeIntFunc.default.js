import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeIntFunc(item) {
    DefaultVisualShaderNode(item);
    item.function ?? (item.function = 2);
}
