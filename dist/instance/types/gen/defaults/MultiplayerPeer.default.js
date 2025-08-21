import { DefaultPacketPeer } from './PacketPeer.default.js';
export function DefaultMultiplayerPeer(item) {
    DefaultPacketPeer(item);
    item.refuse_new_connections ?? (item.refuse_new_connections = false);
    item.transfer_channel ?? (item.transfer_channel = 0);
    item.transfer_mode ?? (item.transfer_mode = 2);
}
