import { DefaultVisualShaderNodeConstant } from './VisualShaderNodeConstant.default';
export function DefaultVisualShaderNodeIntConstant(item) {
    DefaultVisualShaderNodeConstant(item);
    item.constant ?? (item.constant = 0);
}
