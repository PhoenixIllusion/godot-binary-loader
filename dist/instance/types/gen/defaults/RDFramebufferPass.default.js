/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultRefCounted } from './RefCounted.default';
export function DefaultRDFramebufferPass(item) {
    DefaultRefCounted(item);
    item.color_attachments ?? (item.color_attachments = create.PackedInt32Array());
    item.depth_attachment ?? (item.depth_attachment = -1);
    item.input_attachments ?? (item.input_attachments = create.PackedInt32Array());
    item.preserve_attachments ?? (item.preserve_attachments = create.PackedInt32Array());
    item.resolve_attachments ?? (item.resolve_attachments = create.PackedInt32Array());
}
