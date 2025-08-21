import { DefaultPacketPeer } from './PacketPeer.default.js';
export function DefaultPacketPeerStream(item) {
    DefaultPacketPeer(item);
    item.input_buffer_max_size ?? (item.input_buffer_max_size = 65532);
    item.output_buffer_max_size ?? (item.output_buffer_max_size = 65532);
    //stream_peer  
}
