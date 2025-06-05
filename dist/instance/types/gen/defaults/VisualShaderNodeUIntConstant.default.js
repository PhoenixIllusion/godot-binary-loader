import { DefaultVisualShaderNodeConstant } from './VisualShaderNodeConstant.default';
export function DefaultVisualShaderNodeUIntConstant(item) {
    DefaultVisualShaderNodeConstant(item);
    item.constant ?? (item.constant = 0);
}
