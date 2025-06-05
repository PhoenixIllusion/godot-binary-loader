/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode } from './Node.default';
export function DefaultAnimationMixer(item) {
    DefaultNode(item);
    item.active ?? (item.active = true);
    item.audio_max_polyphony ?? (item.audio_max_polyphony = 32);
    item.callback_mode_discrete ?? (item.callback_mode_discrete = 1);
    item.callback_mode_method ?? (item.callback_mode_method = 0);
    item.callback_mode_process ?? (item.callback_mode_process = 1);
    item.deterministic ?? (item.deterministic = false);
    item.reset_on_save ?? (item.reset_on_save = true);
    item.root_motion_track ?? (item.root_motion_track = create.NodePath(""));
    item.root_node ?? (item.root_node = create.NodePath(".."));
}
