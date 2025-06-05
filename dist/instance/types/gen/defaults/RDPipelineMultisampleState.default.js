import { DefaultRefCounted } from './RefCounted.default';
export function DefaultRDPipelineMultisampleState(item) {
    DefaultRefCounted(item);
    item.enable_alpha_to_coverage ?? (item.enable_alpha_to_coverage = false);
    item.enable_alpha_to_one ?? (item.enable_alpha_to_one = false);
    item.enable_sample_shading ?? (item.enable_sample_shading = false);
    item.min_sample_shading ?? (item.min_sample_shading = 0.0);
    item.sample_count ?? (item.sample_count = 0);
    item.sample_masks ?? (item.sample_masks = []);
}
