/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultAnimationMixer } from './AnimationMixer.default.js';
export function DefaultAnimationTree(item) {
    DefaultAnimationMixer(item);
    item.advance_expression_base_node ?? (item.advance_expression_base_node = create.NodePath("."));
    item.anim_player ?? (item.anim_player = create.NodePath(""));
    item.callback_mode_discrete ?? (item.callback_mode_discrete = 2);
    item.deterministic ?? (item.deterministic = true);
    //tree_root  
}
