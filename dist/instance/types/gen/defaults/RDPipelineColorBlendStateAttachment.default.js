import { DefaultRefCounted } from './RefCounted.default.js';
export function DefaultRDPipelineColorBlendStateAttachment(item) {
    DefaultRefCounted(item);
    item.alpha_blend_op ?? (item.alpha_blend_op = 0);
    item.color_blend_op ?? (item.color_blend_op = 0);
    item.dst_alpha_blend_factor ?? (item.dst_alpha_blend_factor = 0);
    item.dst_color_blend_factor ?? (item.dst_color_blend_factor = 0);
    item.enable_blend ?? (item.enable_blend = false);
    item.src_alpha_blend_factor ?? (item.src_alpha_blend_factor = 0);
    item.src_color_blend_factor ?? (item.src_color_blend_factor = 0);
    item.write_a ?? (item.write_a = true);
    item.write_b ?? (item.write_b = true);
    item.write_g ?? (item.write_g = true);
    item.write_r ?? (item.write_r = true);
}
