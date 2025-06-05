import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeBillboard(item) {
    DefaultVisualShaderNode(item);
    item.billboard_type ?? (item.billboard_type = 1);
    item.keep_scale ?? (item.keep_scale = false);
}
