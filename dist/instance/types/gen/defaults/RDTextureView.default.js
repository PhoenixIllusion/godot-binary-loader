import { DefaultRefCounted } from './RefCounted.default';
export function DefaultRDTextureView(item) {
    DefaultRefCounted(item);
    item.format_override ?? (item.format_override = 218);
    item.swizzle_a ?? (item.swizzle_a = 6);
    item.swizzle_b ?? (item.swizzle_b = 5);
    item.swizzle_g ?? (item.swizzle_g = 4);
    item.swizzle_r ?? (item.swizzle_r = 3);
}
