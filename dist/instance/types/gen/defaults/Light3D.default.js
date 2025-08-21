/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisualInstance3D } from './VisualInstance3D.default.js';
export function DefaultLight3D(item) {
    DefaultVisualInstance3D(item);
    item.distance_fade_begin ?? (item.distance_fade_begin = 40.0);
    item.distance_fade_enabled ?? (item.distance_fade_enabled = false);
    item.distance_fade_length ?? (item.distance_fade_length = 10.0);
    item.distance_fade_shadow ?? (item.distance_fade_shadow = 50.0);
    item.editor_only ?? (item.editor_only = false);
    item.light_angular_distance ?? (item.light_angular_distance = 0.0);
    item.light_bake_mode ?? (item.light_bake_mode = 2);
    item.light_color ?? (item.light_color = create.Color(1, 1, 1, 1));
    item.light_cull_mask ?? (item.light_cull_mask = 4294967295);
    item.light_energy ?? (item.light_energy = 1.0);
    item.light_indirect_energy ?? (item.light_indirect_energy = 1.0);
    //light_intensity_lumens
    //light_intensity_lux
    item.light_negative ?? (item.light_negative = false);
    //light_projector
    item.light_size ?? (item.light_size = 0.0);
    item.light_specular ?? (item.light_specular = 0.5);
    //light_temperature
    item.light_volumetric_fog_energy ?? (item.light_volumetric_fog_energy = 1.0);
    item.shadow_bias ?? (item.shadow_bias = 0.1);
    item.shadow_blur ?? (item.shadow_blur = 1.0);
    item.shadow_caster_mask ?? (item.shadow_caster_mask = 4294967295);
    item.shadow_enabled ?? (item.shadow_enabled = false);
    item.shadow_normal_bias ?? (item.shadow_normal_bias = 2.0);
    item.shadow_opacity ?? (item.shadow_opacity = 1.0);
    item.shadow_reverse_cull_face ?? (item.shadow_reverse_cull_face = false);
    item.shadow_transmittance_bias ?? (item.shadow_transmittance_bias = 0.05);
}
