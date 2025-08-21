import { DefaultVisualShaderNodeGroupBase } from './VisualShaderNodeGroupBase.default.js';
export function DefaultVisualShaderNodeExpression(item) {
    DefaultVisualShaderNodeGroupBase(item);
    item.expression ?? (item.expression = "");
}
