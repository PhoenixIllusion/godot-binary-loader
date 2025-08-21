/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode } from './Node.default.js';
export function DefaultCanvasItem(item) {
    DefaultNode(item);
    item.clip_children ?? (item.clip_children = 0);
    item.light_mask ?? (item.light_mask = 1);
    //material
    item.modulate ?? (item.modulate = create.Color(1, 1, 1, 1));
    item.self_modulate ?? (item.self_modulate = create.Color(1, 1, 1, 1));
    item.show_behind_parent ?? (item.show_behind_parent = false);
    item.texture_filter ?? (item.texture_filter = 0);
    item.texture_repeat ?? (item.texture_repeat = 0);
    item.top_level ?? (item.top_level = false);
    item.use_parent_material ?? (item.use_parent_material = false);
    item.visibility_layer ?? (item.visibility_layer = 1);
    item.visible ?? (item.visible = true);
    item.y_sort_enabled ?? (item.y_sort_enabled = false);
    item.z_as_relative ?? (item.z_as_relative = true);
    item.z_index ?? (item.z_index = 0);
}
