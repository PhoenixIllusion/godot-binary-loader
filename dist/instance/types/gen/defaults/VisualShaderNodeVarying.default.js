import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeVarying(item) {
    DefaultVisualShaderNode(item);
    item.varying_name ?? (item.varying_name = "[None]");
    item.varying_type ?? (item.varying_type = 0);
}
