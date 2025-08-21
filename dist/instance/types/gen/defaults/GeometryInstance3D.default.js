/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisualInstance3D } from './VisualInstance3D.default.js';
export function DefaultGeometryInstance3D(item) {
    DefaultVisualInstance3D(item);
    item.cast_shadow ?? (item.cast_shadow = 1);
    item.custom_aabb ?? (item.custom_aabb = create.AABB(0, 0, 0, 0, 0, 0));
    item.extra_cull_margin ?? (item.extra_cull_margin = 0.0);
    item.gi_lightmap_scale ?? (item.gi_lightmap_scale = 0);
    item.gi_mode ?? (item.gi_mode = 1);
    item.ignore_occlusion_culling ?? (item.ignore_occlusion_culling = false);
    item.lod_bias ?? (item.lod_bias = 1.0);
    //material_overlay
    //material_override
    item.transparency ?? (item.transparency = 0.0);
    item.visibility_range_begin ?? (item.visibility_range_begin = 0.0);
    item.visibility_range_begin_margin ?? (item.visibility_range_begin_margin = 0.0);
    item.visibility_range_end ?? (item.visibility_range_end = 0.0);
    item.visibility_range_end_margin ?? (item.visibility_range_end_margin = 0.0);
    item.visibility_range_fade_mode ?? (item.visibility_range_fade_mode = 0);
}
