/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultGeometryInstance3D } from './GeometryInstance3D.default.js';
export function DefaultSpriteBase3D(item) {
    DefaultGeometryInstance3D(item);
    item.alpha_antialiasing_edge ?? (item.alpha_antialiasing_edge = 0.0);
    item.alpha_antialiasing_mode ?? (item.alpha_antialiasing_mode = 0);
    item.alpha_cut ?? (item.alpha_cut = 0);
    item.alpha_hash_scale ?? (item.alpha_hash_scale = 1.0);
    item.alpha_scissor_threshold ?? (item.alpha_scissor_threshold = 0.5);
    item.axis ?? (item.axis = 2);
    item.billboard ?? (item.billboard = 0);
    item.centered ?? (item.centered = true);
    item.double_sided ?? (item.double_sided = true);
    item.fixed_size ?? (item.fixed_size = false);
    item.flip_h ?? (item.flip_h = false);
    item.flip_v ?? (item.flip_v = false);
    item.modulate ?? (item.modulate = create.Color(1, 1, 1, 1));
    item.no_depth_test ?? (item.no_depth_test = false);
    item.offset ?? (item.offset = create.Vector2(0, 0));
    item.pixel_size ?? (item.pixel_size = 0.01);
    item.render_priority ?? (item.render_priority = 0);
    item.shaded ?? (item.shaded = false);
    item.texture_filter ?? (item.texture_filter = 3);
    item.transparent ?? (item.transparent = true);
}
