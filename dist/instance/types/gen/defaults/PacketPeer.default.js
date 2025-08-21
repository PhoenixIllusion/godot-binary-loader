import { DefaultRefCounted } from './RefCounted.default.js';
export function DefaultPacketPeer(item) {
    DefaultRefCounted(item);
    item.encode_buffer_max_size ?? (item.encode_buffer_max_size = 8388608);
}
