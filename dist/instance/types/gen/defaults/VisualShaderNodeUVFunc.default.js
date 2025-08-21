import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeUVFunc(item) {
    DefaultVisualShaderNode(item);
    item.function ?? (item.function = 0);
}
