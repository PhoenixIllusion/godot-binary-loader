import { DefaultRefCounted } from './RefCounted.default';
export function DefaultUDPServer(item) {
    DefaultRefCounted(item);
    item.max_pending_connections ?? (item.max_pending_connections = 16);
}
