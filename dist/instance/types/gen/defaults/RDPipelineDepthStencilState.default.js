import { DefaultRefCounted } from './RefCounted.default';
export function DefaultRDPipelineDepthStencilState(item) {
    DefaultRefCounted(item);
    item.back_op_compare ?? (item.back_op_compare = 7);
    item.back_op_compare_mask ?? (item.back_op_compare_mask = 0);
    item.back_op_depth_fail ?? (item.back_op_depth_fail = 1);
    item.back_op_fail ?? (item.back_op_fail = 1);
    item.back_op_pass ?? (item.back_op_pass = 1);
    item.back_op_reference ?? (item.back_op_reference = 0);
    item.back_op_write_mask ?? (item.back_op_write_mask = 0);
    item.depth_compare_operator ?? (item.depth_compare_operator = 7);
    item.depth_range_max ?? (item.depth_range_max = 0.0);
    item.depth_range_min ?? (item.depth_range_min = 0.0);
    item.enable_depth_range ?? (item.enable_depth_range = false);
    item.enable_depth_test ?? (item.enable_depth_test = false);
    item.enable_depth_write ?? (item.enable_depth_write = false);
    item.enable_stencil ?? (item.enable_stencil = false);
    item.front_op_compare ?? (item.front_op_compare = 7);
    item.front_op_compare_mask ?? (item.front_op_compare_mask = 0);
    item.front_op_depth_fail ?? (item.front_op_depth_fail = 1);
    item.front_op_fail ?? (item.front_op_fail = 1);
    item.front_op_pass ?? (item.front_op_pass = 1);
    item.front_op_reference ?? (item.front_op_reference = 0);
    item.front_op_write_mask ?? (item.front_op_write_mask = 0);
}
