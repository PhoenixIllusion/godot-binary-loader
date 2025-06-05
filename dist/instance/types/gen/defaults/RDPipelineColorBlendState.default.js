/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultRefCounted } from './RefCounted.default';
export function DefaultRDPipelineColorBlendState(item) {
    DefaultRefCounted(item);
    item.attachments ?? (item.attachments = []);
    item.blend_constant ?? (item.blend_constant = create.Color(0, 0, 0, 1));
    item.enable_logic_op ?? (item.enable_logic_op = false);
    item.logic_op ?? (item.logic_op = 0);
}
