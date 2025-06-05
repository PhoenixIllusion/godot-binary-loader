import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeTransformFunc(item) {
    DefaultVisualShaderNode(item);
    item.function ?? (item.function = 0);
}
