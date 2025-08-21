import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeUIntFunc(item) {
    DefaultVisualShaderNode(item);
    item.function ?? (item.function = 0);
}
