import { DefaultVisualShaderNodeParameter } from './VisualShaderNodeParameter.default.js';
export function DefaultVisualShaderNodeUIntParameter(item) {
    DefaultVisualShaderNodeParameter(item);
    item.default_value ?? (item.default_value = 0);
    item.default_value_enabled ?? (item.default_value_enabled = false);
}
