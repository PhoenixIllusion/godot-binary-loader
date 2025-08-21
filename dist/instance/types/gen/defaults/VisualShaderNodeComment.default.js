import { DefaultVisualShaderNodeFrame } from './VisualShaderNodeFrame.default.js';
export function DefaultVisualShaderNodeComment(item) {
    DefaultVisualShaderNodeFrame(item);
    item.description ?? (item.description = "");
}
