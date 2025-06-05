import { DefaultRefCounted } from './RefCounted.default';
export function DefaultXRTracker(item) {
    DefaultRefCounted(item);
    item.description ?? (item.description = "");
    item.name ?? (item.name = "Unknown");
    item.type ?? (item.type = 128);
}
