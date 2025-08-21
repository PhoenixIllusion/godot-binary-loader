/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default.js';
export function DefaultLight2D(item) {
    DefaultNode2D(item);
    item.blend_mode ?? (item.blend_mode = 0);
    item.color ?? (item.color = create.Color(1, 1, 1, 1));
    item.editor_only ?? (item.editor_only = false);
    item.enabled ?? (item.enabled = true);
    item.energy ?? (item.energy = 1.0);
    item.range_item_cull_mask ?? (item.range_item_cull_mask = 1);
    item.range_layer_max ?? (item.range_layer_max = 0);
    item.range_layer_min ?? (item.range_layer_min = 0);
    item.range_z_max ?? (item.range_z_max = 1024);
    item.range_z_min ?? (item.range_z_min = -1024);
    item.shadow_color ?? (item.shadow_color = create.Color(0, 0, 0, 0));
    item.shadow_enabled ?? (item.shadow_enabled = false);
    item.shadow_filter ?? (item.shadow_filter = 0);
    item.shadow_filter_smooth ?? (item.shadow_filter_smooth = 0.0);
    item.shadow_item_cull_mask ?? (item.shadow_item_cull_mask = 1);
}
