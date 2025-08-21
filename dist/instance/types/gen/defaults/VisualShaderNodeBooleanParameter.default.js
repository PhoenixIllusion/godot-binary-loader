import { DefaultVisualShaderNodeParameter } from './VisualShaderNodeParameter.default.js';
export function DefaultVisualShaderNodeBooleanParameter(item) {
    DefaultVisualShaderNodeParameter(item);
    item.default_value ?? (item.default_value = false);
    item.default_value_enabled ?? (item.default_value_enabled = false);
}
