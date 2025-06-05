import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeUIntFunc(item) {
    DefaultVisualShaderNode(item);
    item.function ?? (item.function = 0);
}
