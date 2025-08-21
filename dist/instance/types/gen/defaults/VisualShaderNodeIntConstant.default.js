import { DefaultVisualShaderNodeConstant } from './VisualShaderNodeConstant.default.js';
export function DefaultVisualShaderNodeIntConstant(item) {
    DefaultVisualShaderNodeConstant(item);
    item.constant ?? (item.constant = 0);
}
