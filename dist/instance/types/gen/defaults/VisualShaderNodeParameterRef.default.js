import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeParameterRef(item) {
    DefaultVisualShaderNode(item);
    item.parameter_name ?? (item.parameter_name = "[None]");
}
