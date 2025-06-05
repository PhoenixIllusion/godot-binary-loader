import { DefaultRefCounted } from './RefCounted.default';
export function DefaultRandomNumberGenerator(item) {
    DefaultRefCounted(item);
    item.seed ?? (item.seed = 0);
    item.state ?? (item.state = 0);
}
