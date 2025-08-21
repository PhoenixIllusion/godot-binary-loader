/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default.js';
export function DefaultGPUParticles2D(item) {
    DefaultNode2D(item);
    item.amount ?? (item.amount = 8);
    item.amount_ratio ?? (item.amount_ratio = 1.0);
    item.collision_base_size ?? (item.collision_base_size = 1.0);
    item.draw_order ?? (item.draw_order = 1);
    item.emitting ?? (item.emitting = true);
    item.explosiveness ?? (item.explosiveness = 0.0);
    item.fixed_fps ?? (item.fixed_fps = 30);
    item.fract_delta ?? (item.fract_delta = true);
    item.interp_to_end ?? (item.interp_to_end = 0.0);
    item.interpolate ?? (item.interpolate = true);
    item.lifetime ?? (item.lifetime = 1.0);
    item.local_coords ?? (item.local_coords = false);
    item.one_shot ?? (item.one_shot = false);
    item.preprocess ?? (item.preprocess = 0.0);
    //process_material
    item.randomness ?? (item.randomness = 0.0);
    item.speed_scale ?? (item.speed_scale = 1.0);
    item.sub_emitter ?? (item.sub_emitter = create.NodePath(""));
    //texture
    item.trail_enabled ?? (item.trail_enabled = false);
    item.trail_lifetime ?? (item.trail_lifetime = 0.3);
    item.trail_section_subdivisions ?? (item.trail_section_subdivisions = 4);
    item.trail_sections ?? (item.trail_sections = 8);
    item.visibility_rect ?? (item.visibility_rect = create.Rect2(-100, -100, 200, 200));
}
