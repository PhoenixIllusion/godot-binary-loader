/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultMaterial } from './Material.default';
export function DefaultPhysicalSkyMaterial(item) {
    DefaultMaterial(item);
    item.energy_multiplier ?? (item.energy_multiplier = 1.0);
    item.ground_color ?? (item.ground_color = create.Color(0.1, 0.07, 0.034, 1));
    item.mie_coefficient ?? (item.mie_coefficient = 0.005);
    item.mie_color ?? (item.mie_color = create.Color(0.69, 0.729, 0.812, 1));
    item.mie_eccentricity ?? (item.mie_eccentricity = 0.8);
    //night_sky
    item.rayleigh_coefficient ?? (item.rayleigh_coefficient = 2.0);
    item.rayleigh_color ?? (item.rayleigh_color = create.Color(0.3, 0.405, 0.6, 1));
    item.sun_disk_scale ?? (item.sun_disk_scale = 1.0);
    item.turbidity ?? (item.turbidity = 10.0);
    item.use_debanding ?? (item.use_debanding = true);
}
