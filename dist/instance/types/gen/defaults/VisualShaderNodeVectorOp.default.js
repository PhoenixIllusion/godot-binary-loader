import { DefaultVisualShaderNodeVectorBase } from './VisualShaderNodeVectorBase.default.js';
export function DefaultVisualShaderNodeVectorOp(item) {
    DefaultVisualShaderNodeVectorBase(item);
    item.operator ?? (item.operator = 0);
}
