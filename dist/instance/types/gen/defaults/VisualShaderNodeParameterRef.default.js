import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeParameterRef(item) {
    DefaultVisualShaderNode(item);
    item.parameter_name ?? (item.parameter_name = "[None]");
}
