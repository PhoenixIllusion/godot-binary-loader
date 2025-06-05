import { DefaultVisualShaderNode } from './VisualShaderNode.default';
export function DefaultVisualShaderNodeCubemap(item) {
    DefaultVisualShaderNode(item);
    //cube_map
    item.source ?? (item.source = 0);
    item.texture_type ?? (item.texture_type = 0);
}
