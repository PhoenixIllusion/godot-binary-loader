import { DefaultVisualShaderNodeParameter } from './VisualShaderNodeParameter.default';
export function DefaultVisualShaderNodeFloatParameter(item) {
    DefaultVisualShaderNodeParameter(item);
    item.default_value ?? (item.default_value = 0.0);
    item.default_value_enabled ?? (item.default_value_enabled = false);
    item.hint ?? (item.hint = 0);
    item.max ?? (item.max = 1.0);
    item.min ?? (item.min = 0.0);
    item.step ?? (item.step = 0.1);
}
