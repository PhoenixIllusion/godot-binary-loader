import { DefaultRefCounted } from './RefCounted.default.js';
export function DefaultRDVertexAttribute(item) {
    DefaultRefCounted(item);
    item.format ?? (item.format = 218);
    item.frequency ?? (item.frequency = 0);
    item.location ?? (item.location = 0);
    item.offset ?? (item.offset = 0);
    item.stride ?? (item.stride = 0);
}
