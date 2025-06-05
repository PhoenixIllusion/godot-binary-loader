/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultGeometryInstance3D } from './GeometryInstance3D.default';
export function DefaultCPUParticles3D(item) {
    DefaultGeometryInstance3D(item);
    item.amount ?? (item.amount = 8);
    //angle_curve
    item.angle_max ?? (item.angle_max = 0.0);
    item.angle_min ?? (item.angle_min = 0.0);
    //angular_velocity_curve
    item.angular_velocity_max ?? (item.angular_velocity_max = 0.0);
    item.angular_velocity_min ?? (item.angular_velocity_min = 0.0);
    //anim_offset_curve
    item.anim_offset_max ?? (item.anim_offset_max = 0.0);
    item.anim_offset_min ?? (item.anim_offset_min = 0.0);
    //anim_speed_curve
    item.anim_speed_max ?? (item.anim_speed_max = 0.0);
    item.anim_speed_min ?? (item.anim_speed_min = 0.0);
    item.color ?? (item.color = create.Color(1, 1, 1, 1));
    //color_initial_ramp
    //color_ramp
    //damping_curve
    item.damping_max ?? (item.damping_max = 0.0);
    item.damping_min ?? (item.damping_min = 0.0);
    item.direction ?? (item.direction = create.Vector3(1, 0, 0));
    item.draw_order ?? (item.draw_order = 0);
    //emission_box_extents
    item.emission_colors ?? (item.emission_colors = create.PackedColorArray());
    //emission_normals
    //emission_points
    //emission_ring_axis
    //emission_ring_cone_angle
    //emission_ring_height
    //emission_ring_inner_radius
    //emission_ring_radius
    item.emission_shape ?? (item.emission_shape = 0);
    //emission_sphere_radius
    item.emitting ?? (item.emitting = true);
    item.explosiveness ?? (item.explosiveness = 0.0);
    item.fixed_fps ?? (item.fixed_fps = 0);
    item.flatness ?? (item.flatness = 0.0);
    item.fract_delta ?? (item.fract_delta = true);
    item.gravity ?? (item.gravity = create.Vector3(0, -9.8, 0));
    //hue_variation_curve
    item.hue_variation_max ?? (item.hue_variation_max = 0.0);
    item.hue_variation_min ?? (item.hue_variation_min = 0.0);
    item.initial_velocity_max ?? (item.initial_velocity_max = 0.0);
    item.initial_velocity_min ?? (item.initial_velocity_min = 0.0);
    item.lifetime ?? (item.lifetime = 1.0);
    item.lifetime_randomness ?? (item.lifetime_randomness = 0.0);
    //linear_accel_curve
    item.linear_accel_max ?? (item.linear_accel_max = 0.0);
    item.linear_accel_min ?? (item.linear_accel_min = 0.0);
    item.local_coords ?? (item.local_coords = false);
    //mesh
    item.one_shot ?? (item.one_shot = false);
    //orbit_velocity_curve
    //orbit_velocity_max
    //orbit_velocity_min
    item.particle_flag_align_y ?? (item.particle_flag_align_y = false);
    item.particle_flag_disable_z ?? (item.particle_flag_disable_z = false);
    item.particle_flag_rotate_y ?? (item.particle_flag_rotate_y = false);
    item.preprocess ?? (item.preprocess = 0.0);
    //radial_accel_curve
    item.radial_accel_max ?? (item.radial_accel_max = 0.0);
    item.radial_accel_min ?? (item.radial_accel_min = 0.0);
    item.randomness ?? (item.randomness = 0.0);
    //scale_amount_curve
    item.scale_amount_max ?? (item.scale_amount_max = 1.0);
    item.scale_amount_min ?? (item.scale_amount_min = 1.0);
    //scale_curve_x
    //scale_curve_y
    //scale_curve_z
    item.speed_scale ?? (item.speed_scale = 1.0);
    item.split_scale ?? (item.split_scale = false);
    item.spread ?? (item.spread = 45.0);
    //tangential_accel_curve
    item.tangential_accel_max ?? (item.tangential_accel_max = 0.0);
    item.tangential_accel_min ?? (item.tangential_accel_min = 0.0);
    item.visibility_aabb ?? (item.visibility_aabb = create.AABB(0, 0, 0, 0, 0, 0));
}
