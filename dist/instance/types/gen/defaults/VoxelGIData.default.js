import { DefaultResource } from './Resource.default';
export function DefaultVoxelGIData(item) {
    DefaultResource(item);
    item.bias ?? (item.bias = 1.5);
    item.dynamic_range ?? (item.dynamic_range = 2.0);
    item.energy ?? (item.energy = 1.0);
    item.interior ?? (item.interior = false);
    item.normal_bias ?? (item.normal_bias = 0.0);
    item.propagation ?? (item.propagation = 0.5);
    item.use_two_bounces ?? (item.use_two_bounces = true);
}
