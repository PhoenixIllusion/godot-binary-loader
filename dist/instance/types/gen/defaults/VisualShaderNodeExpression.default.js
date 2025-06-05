import { DefaultVisualShaderNodeGroupBase } from './VisualShaderNodeGroupBase.default';
export function DefaultVisualShaderNodeExpression(item) {
    DefaultVisualShaderNodeGroupBase(item);
    item.expression ?? (item.expression = "");
}
