/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultVisualInstance3D } from './VisualInstance3D.default';
export function DefaultReflectionProbe(item) {
    DefaultVisualInstance3D(item);
    item.ambient_color ?? (item.ambient_color = create.Color(0, 0, 0, 1));
    item.ambient_color_energy ?? (item.ambient_color_energy = 1.0);
    item.ambient_mode ?? (item.ambient_mode = 1);
    item.box_projection ?? (item.box_projection = false);
    item.cull_mask ?? (item.cull_mask = 1048575);
    item.enable_shadows ?? (item.enable_shadows = false);
    item.intensity ?? (item.intensity = 1.0);
    item.interior ?? (item.interior = false);
    item.max_distance ?? (item.max_distance = 0.0);
    item.mesh_lod_threshold ?? (item.mesh_lod_threshold = 1.0);
    item.origin_offset ?? (item.origin_offset = create.Vector3(0, 0, 0));
    item.reflection_mask ?? (item.reflection_mask = 1048575);
    item.size ?? (item.size = create.Vector3(20, 20, 20));
    item.update_mode ?? (item.update_mode = 0);
}
