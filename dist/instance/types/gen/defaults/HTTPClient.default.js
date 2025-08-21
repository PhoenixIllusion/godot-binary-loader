import { DefaultRefCounted } from './RefCounted.default.js';
export function DefaultHTTPClient(item) {
    DefaultRefCounted(item);
    item.blocking_mode_enabled ?? (item.blocking_mode_enabled = false);
    //connection
    item.read_chunk_size ?? (item.read_chunk_size = 65536);
}
