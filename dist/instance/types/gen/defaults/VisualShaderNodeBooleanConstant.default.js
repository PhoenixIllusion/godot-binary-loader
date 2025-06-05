import { DefaultVisualShaderNodeConstant } from './VisualShaderNodeConstant.default';
export function DefaultVisualShaderNodeBooleanConstant(item) {
    DefaultVisualShaderNodeConstant(item);
    item.constant ?? (item.constant = false);
}
