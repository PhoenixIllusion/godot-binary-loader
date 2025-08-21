import { DefaultVisualShaderNodeVectorBase } from './VisualShaderNodeVectorBase.default.js';
export function DefaultVisualShaderNodeVectorFunc(item) {
    DefaultVisualShaderNodeVectorBase(item);
    item.function ?? (item.function = 0);
}
