import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeParameter(item) {
    DefaultVisualShaderNode(item);
    item.parameter_name ?? (item.parameter_name = "");
    item.qualifier ?? (item.qualifier = 0);
}
