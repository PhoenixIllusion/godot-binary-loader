import { DefaultRefCounted } from './RefCounted.default';
export function DefaultRDTextureFormat(item) {
    DefaultRefCounted(item);
    item.array_layers ?? (item.array_layers = 1);
    item.depth ?? (item.depth = 1);
    item.format ?? (item.format = 8);
    item.height ?? (item.height = 1);
    item.mipmaps ?? (item.mipmaps = 1);
    item.samples ?? (item.samples = 0);
    item.texture_type ?? (item.texture_type = 1);
    item.usage_bits ?? (item.usage_bits = 0);
    item.width ?? (item.width = 1);
}
