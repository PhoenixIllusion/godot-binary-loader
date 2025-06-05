import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeInput(item) {
    DefaultVisualShaderNode(item);
    item.input_name ?? (item.input_name = "[None]");
}
