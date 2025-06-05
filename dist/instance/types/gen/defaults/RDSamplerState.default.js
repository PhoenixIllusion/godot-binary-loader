import { DefaultRefCounted } from './RefCounted.default';
export function DefaultRDSamplerState(item) {
    DefaultRefCounted(item);
    item.anisotropy_max ?? (item.anisotropy_max = 1.0);
    item.border_color ?? (item.border_color = 2);
    item.compare_op ?? (item.compare_op = 7);
    item.enable_compare ?? (item.enable_compare = false);
    item.lod_bias ?? (item.lod_bias = 0.0);
    item.mag_filter ?? (item.mag_filter = 0);
    item.max_lod ?? (item.max_lod = 1e+20);
    item.min_filter ?? (item.min_filter = 0);
    item.min_lod ?? (item.min_lod = 0.0);
    item.mip_filter ?? (item.mip_filter = 0);
    item.repeat_u ?? (item.repeat_u = 2);
    item.repeat_v ?? (item.repeat_v = 2);
    item.repeat_w ?? (item.repeat_w = 2);
    item.unnormalized_uvw ?? (item.unnormalized_uvw = false);
    item.use_anisotropy ?? (item.use_anisotropy = false);
}
