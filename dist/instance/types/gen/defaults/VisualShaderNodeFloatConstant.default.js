import { DefaultVisualShaderNodeConstant } from './VisualShaderNodeConstant.default';
export function DefaultVisualShaderNodeFloatConstant(item) {
    DefaultVisualShaderNodeConstant(item);
    item.constant ?? (item.constant = 0.0);
}
