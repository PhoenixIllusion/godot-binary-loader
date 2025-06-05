import { DefaultVisualShaderNodeVectorBase } from './VisualShaderNodeVectorBase.default';
export function DefaultVisualShaderNodeVectorFunc(item) {
    DefaultVisualShaderNodeVectorBase(item);
    item.function ?? (item.function = 0);
}
