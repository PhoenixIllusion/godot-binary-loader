import { DefaultRefCounted } from './RefCounted.default';
export function DefaultRDPipelineRasterizationState(item) {
    DefaultRefCounted(item);
    item.cull_mode ?? (item.cull_mode = 0);
    item.depth_bias_clamp ?? (item.depth_bias_clamp = 0.0);
    item.depth_bias_constant_factor ?? (item.depth_bias_constant_factor = 0.0);
    item.depth_bias_enabled ?? (item.depth_bias_enabled = false);
    item.depth_bias_slope_factor ?? (item.depth_bias_slope_factor = 0.0);
    item.discard_primitives ?? (item.discard_primitives = false);
    item.enable_depth_clamp ?? (item.enable_depth_clamp = false);
    item.front_face ?? (item.front_face = 0);
    item.line_width ?? (item.line_width = 1.0);
    item.patch_control_points ?? (item.patch_control_points = 1);
    item.wireframe ?? (item.wireframe = false);
}
