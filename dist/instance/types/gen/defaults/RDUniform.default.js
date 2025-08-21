import { DefaultRefCounted } from './RefCounted.default.js';
export function DefaultRDUniform(item) {
    DefaultRefCounted(item);
    item.binding ?? (item.binding = 0);
    item.uniform_type ?? (item.uniform_type = 3);
}
