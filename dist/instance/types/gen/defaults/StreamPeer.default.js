import { DefaultRefCounted } from './RefCounted.default';
export function DefaultStreamPeer(item) {
    DefaultRefCounted(item);
    item.big_endian ?? (item.big_endian = false);
}
