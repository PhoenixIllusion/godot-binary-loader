import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeTransformFunc(item) {
    DefaultVisualShaderNode(item);
    item.function ?? (item.function = 0);
}
