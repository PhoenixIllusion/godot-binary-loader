/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVBoxContainer } from './VBoxContainer.default';
export function DefaultColorPicker(item) {
    DefaultVBoxContainer(item);
    item.can_add_swatches ?? (item.can_add_swatches = true);
    item.color ?? (item.color = create.Color(1, 1, 1, 1));
    item.color_mode ?? (item.color_mode = 0);
    item.color_modes_visible ?? (item.color_modes_visible = true);
    item.deferred_mode ?? (item.deferred_mode = false);
    item.edit_alpha ?? (item.edit_alpha = true);
    item.hex_visible ?? (item.hex_visible = true);
    item.picker_shape ?? (item.picker_shape = 0);
    item.presets_visible ?? (item.presets_visible = true);
    item.sampler_visible ?? (item.sampler_visible = true);
    item.sliders_visible ?? (item.sliders_visible = true);
}
