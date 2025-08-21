import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeInput(item) {
    DefaultVisualShaderNode(item);
    item.input_name ?? (item.input_name = "[None]");
}
