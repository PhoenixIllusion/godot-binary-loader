import { DefaultVisualShaderNodeFrame } from './VisualShaderNodeFrame.default';
export function DefaultVisualShaderNodeComment(item) {
    DefaultVisualShaderNodeFrame(item);
    item.description ?? (item.description = "");
}
