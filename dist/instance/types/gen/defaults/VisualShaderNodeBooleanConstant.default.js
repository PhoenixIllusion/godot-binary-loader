import { DefaultVisualShaderNodeConstant } from './VisualShaderNodeConstant.default.js';
export function DefaultVisualShaderNodeBooleanConstant(item) {
    DefaultVisualShaderNodeConstant(item);
    item.constant ?? (item.constant = false);
}
