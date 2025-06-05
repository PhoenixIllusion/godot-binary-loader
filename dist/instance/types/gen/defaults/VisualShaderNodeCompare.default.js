import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeCompare(item) {
    DefaultVisualShaderNode(item);
    item.condition ?? (item.condition = 0);
    item.function ?? (item.function = 0);
    item.type ?? (item.type = 0);
}
