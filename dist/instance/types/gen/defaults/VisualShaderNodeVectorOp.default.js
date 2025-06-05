import { DefaultVisualShaderNodeVectorBase } from './VisualShaderNodeVectorBase.default';
export function DefaultVisualShaderNodeVectorOp(item) {
    DefaultVisualShaderNodeVectorBase(item);
    item.operator ?? (item.operator = 0);
}
