import { DefaultRefCounted } from './RefCounted.default.js';
export function DefaultStreamPeer(item) {
    DefaultRefCounted(item);
    item.big_endian ?? (item.big_endian = false);
}
