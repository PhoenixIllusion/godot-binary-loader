import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeParameter(item) {
    DefaultVisualShaderNode(item);
    item.parameter_name ?? (item.parameter_name = "");
    item.qualifier ?? (item.qualifier = 0);
}
