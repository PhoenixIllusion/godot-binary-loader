/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultCollisionObject3D } from './CollisionObject3D.default.js';
export function DefaultArea3D(item) {
    DefaultCollisionObject3D(item);
    item.angular_damp ?? (item.angular_damp = 0.1);
    item.angular_damp_space_override ?? (item.angular_damp_space_override = 0);
    item.audio_bus_name ?? (item.audio_bus_name = "Master");
    item.audio_bus_override ?? (item.audio_bus_override = false);
    item.gravity ?? (item.gravity = 9.8);
    item.gravity_direction ?? (item.gravity_direction = create.Vector3(0, -1, 0));
    item.gravity_point ?? (item.gravity_point = false);
    item.gravity_point_center ?? (item.gravity_point_center = create.Vector3(0, -1, 0));
    item.gravity_point_unit_distance ?? (item.gravity_point_unit_distance = 0.0);
    item.gravity_space_override ?? (item.gravity_space_override = 0);
    item.linear_damp ?? (item.linear_damp = 0.1);
    item.linear_damp_space_override ?? (item.linear_damp_space_override = 0);
    item.monitorable ?? (item.monitorable = true);
    item.monitoring ?? (item.monitoring = true);
    item.priority ?? (item.priority = 0);
    item.reverb_bus_amount ?? (item.reverb_bus_amount = 0.0);
    item.reverb_bus_enabled ?? (item.reverb_bus_enabled = false);
    item.reverb_bus_name ?? (item.reverb_bus_name = "Master");
    item.reverb_bus_uniformity ?? (item.reverb_bus_uniformity = 0.0);
    item.wind_attenuation_factor ?? (item.wind_attenuation_factor = 0.0);
    item.wind_force_magnitude ?? (item.wind_force_magnitude = 0.0);
    item.wind_source_path ?? (item.wind_source_path = create.NodePath(""));
}
