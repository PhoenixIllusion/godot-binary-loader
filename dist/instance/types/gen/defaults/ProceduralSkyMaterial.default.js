/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultMaterial } from './Material.default';
export function DefaultProceduralSkyMaterial(item) {
    DefaultMaterial(item);
    item.energy_multiplier ?? (item.energy_multiplier = 1.0);
    item.ground_bottom_color ?? (item.ground_bottom_color = create.Color(0.2, 0.169, 0.133, 1));
    item.ground_curve ?? (item.ground_curve = 0.02);
    item.ground_energy_multiplier ?? (item.ground_energy_multiplier = 1.0);
    item.ground_horizon_color ?? (item.ground_horizon_color = create.Color(0.6463, 0.6558, 0.6708, 1));
    //sky_cover
    item.sky_cover_modulate ?? (item.sky_cover_modulate = create.Color(1, 1, 1, 1));
    item.sky_curve ?? (item.sky_curve = 0.15);
    item.sky_energy_multiplier ?? (item.sky_energy_multiplier = 1.0);
    item.sky_horizon_color ?? (item.sky_horizon_color = create.Color(0.6463, 0.6558, 0.6708, 1));
    item.sky_top_color ?? (item.sky_top_color = create.Color(0.385, 0.454, 0.55, 1));
    item.sun_angle_max ?? (item.sun_angle_max = 30.0);
    item.sun_curve ?? (item.sun_curve = 0.15);
    item.use_debanding ?? (item.use_debanding = true);
}
