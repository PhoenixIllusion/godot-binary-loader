import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeSample3D(item) {
    DefaultVisualShaderNode(item);
    item.source ?? (item.source = 0);
}
