import { DefaultRefCounted } from './RefCounted.default.js';
export function DefaultEncodedObjectAsID(item) {
    DefaultRefCounted(item);
    item.object_id ?? (item.object_id = 0);
}
