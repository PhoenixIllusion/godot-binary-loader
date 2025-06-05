/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultStreamPeer } from './StreamPeer.default';
export function DefaultStreamPeerBuffer(item) {
    DefaultStreamPeer(item);
    item.data_array ?? (item.data_array = create.PackedByteArray());
}
