/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultResource } from './Resource.default.js';
export function DefaultMultiMesh(item) {
    DefaultResource(item);
    item.buffer ?? (item.buffer = create.PackedFloat32Array());
    //color_array
    item.custom_aabb ?? (item.custom_aabb = create.AABB(0, 0, 0, 0, 0, 0));
    //custom_data_array
    item.instance_count ?? (item.instance_count = 0);
    //mesh
    item.physics_interpolation_quality ?? (item.physics_interpolation_quality = 0);
    //transform_2d_array
    //transform_array
    item.transform_format ?? (item.transform_format = 0);
    item.use_colors ?? (item.use_colors = false);
    item.use_custom_data ?? (item.use_custom_data = false);
    item.visible_instance_count ?? (item.visible_instance_count = -1);
}
