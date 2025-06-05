/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisualInstance3D } from './VisualInstance3D.default';
export function DefaultDecal(item) {
    DefaultVisualInstance3D(item);
    item.albedo_mix ?? (item.albedo_mix = 1.0);
    item.cull_mask ?? (item.cull_mask = 1048575);
    item.distance_fade_begin ?? (item.distance_fade_begin = 40.0);
    item.distance_fade_enabled ?? (item.distance_fade_enabled = false);
    item.distance_fade_length ?? (item.distance_fade_length = 10.0);
    item.emission_energy ?? (item.emission_energy = 1.0);
    item.lower_fade ?? (item.lower_fade = 0.3);
    item.modulate ?? (item.modulate = create.Color(1, 1, 1, 1));
    item.normal_fade ?? (item.normal_fade = 0.0);
    item.size ?? (item.size = create.Vector3(2, 2, 2));
    //texture_albedo
    //texture_emission
    //texture_normal
    //texture_orm
    item.upper_fade ?? (item.upper_fade = 0.3);
}
