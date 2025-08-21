import { DefaultVisualShaderNodeParameter } from './VisualShaderNodeParameter.default.js';
export function DefaultVisualShaderNodeTextureParameter(item) {
    DefaultVisualShaderNodeParameter(item);
    item.color_default ?? (item.color_default = 0);
    item.texture_filter ?? (item.texture_filter = 0);
    item.texture_repeat ?? (item.texture_repeat = 0);
    item.texture_source ?? (item.texture_source = 0);
    item.texture_type ?? (item.texture_type = 0);
}
