import { DefaultVisualShaderNode } from './VisualShaderNode.default.js';
export function DefaultVisualShaderNodeTexture(item) {
    DefaultVisualShaderNode(item);
    item.source ?? (item.source = 0);
    //texture
    item.texture_type ?? (item.texture_type = 0);
}
