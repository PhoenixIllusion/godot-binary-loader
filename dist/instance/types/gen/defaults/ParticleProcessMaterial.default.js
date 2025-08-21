/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultMaterial } from './Material.default.js';
export function DefaultParticleProcessMaterial(item) {
    DefaultMaterial(item);
    //alpha_curve
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
    item.attractor_interaction_enabled ?? (item.attractor_interaction_enabled = true);
    //collision_bounce
    //collision_friction
    item.collision_mode ?? (item.collision_mode = 0);
    item.collision_use_scale ?? (item.collision_use_scale = false);
    item.color ?? (item.color = create.Color(1, 1, 1, 1));
    //color_initial_ramp
    //color_ramp
    //damping_curve
    item.damping_max ?? (item.damping_max = 0.0);
    item.damping_min ?? (item.damping_min = 0.0);
    item.direction ?? (item.direction = create.Vector3(1, 0, 0));
    //directional_velocity_curve
    //directional_velocity_max
    //directional_velocity_min
    //emission_box_extents
    //emission_color_texture
    //emission_curve
    //emission_normal_texture
    //emission_point_count
    //emission_point_texture
    //emission_ring_axis
    //emission_ring_cone_angle
    //emission_ring_height
    //emission_ring_inner_radius
    //emission_ring_radius
    item.emission_shape ?? (item.emission_shape = 0);
    item.emission_shape_offset ?? (item.emission_shape_offset = create.Vector3(0, 0, 0));
    item.emission_shape_scale ?? (item.emission_shape_scale = create.Vector3(1, 1, 1));
    //emission_sphere_radius
    item.flatness ?? (item.flatness = 0.0);
    item.gravity ?? (item.gravity = create.Vector3(0, -9.8, 0));
    //hue_variation_curve
    item.hue_variation_max ?? (item.hue_variation_max = 0.0);
    item.hue_variation_min ?? (item.hue_variation_min = 0.0);
    item.inherit_velocity_ratio ?? (item.inherit_velocity_ratio = 0.0);
    item.initial_velocity_max ?? (item.initial_velocity_max = 0.0);
    item.initial_velocity_min ?? (item.initial_velocity_min = 0.0);
    item.lifetime_randomness ?? (item.lifetime_randomness = 0.0);
    //linear_accel_curve
    item.linear_accel_max ?? (item.linear_accel_max = 0.0);
    item.linear_accel_min ?? (item.linear_accel_min = 0.0);
    //orbit_velocity_curve
    item.orbit_velocity_max ?? (item.orbit_velocity_max = 0.0);
    item.orbit_velocity_min ?? (item.orbit_velocity_min = 0.0);
    item.particle_flag_align_y ?? (item.particle_flag_align_y = false);
    item.particle_flag_damping_as_friction ?? (item.particle_flag_damping_as_friction = false);
    item.particle_flag_disable_z ?? (item.particle_flag_disable_z = false);
    item.particle_flag_rotate_y ?? (item.particle_flag_rotate_y = false);
    //radial_accel_curve
    item.radial_accel_max ?? (item.radial_accel_max = 0.0);
    item.radial_accel_min ?? (item.radial_accel_min = 0.0);
    //radial_velocity_curve
    item.radial_velocity_max ?? (item.radial_velocity_max = 0.0);
    item.radial_velocity_min ?? (item.radial_velocity_min = 0.0);
    //scale_curve
    item.scale_max ?? (item.scale_max = 1.0);
    item.scale_min ?? (item.scale_min = 1.0);
    //scale_over_velocity_curve
    item.scale_over_velocity_max ?? (item.scale_over_velocity_max = 0.0);
    item.scale_over_velocity_min ?? (item.scale_over_velocity_min = 0.0);
    item.spread ?? (item.spread = 45.0);
    //sub_emitter_amount_at_collision
    //sub_emitter_amount_at_end
    //sub_emitter_frequency
    item.sub_emitter_keep_velocity ?? (item.sub_emitter_keep_velocity = false);
    item.sub_emitter_mode ?? (item.sub_emitter_mode = 0);
    //tangential_accel_curve
    item.tangential_accel_max ?? (item.tangential_accel_max = 0.0);
    item.tangential_accel_min ?? (item.tangential_accel_min = 0.0);
    item.turbulence_enabled ?? (item.turbulence_enabled = false);
    item.turbulence_influence_max ?? (item.turbulence_influence_max = 0.1);
    item.turbulence_influence_min ?? (item.turbulence_influence_min = 0.1);
    //turbulence_influence_over_life
    item.turbulence_initial_displacement_max ?? (item.turbulence_initial_displacement_max = 0.0);
    item.turbulence_initial_displacement_min ?? (item.turbulence_initial_displacement_min = 0.0);
    item.turbulence_noise_scale ?? (item.turbulence_noise_scale = 9.0);
    item.turbulence_noise_speed ?? (item.turbulence_noise_speed = create.Vector3(0, 0, 0));
    item.turbulence_noise_speed_random ?? (item.turbulence_noise_speed_random = 0.2);
    item.turbulence_noise_strength ?? (item.turbulence_noise_strength = 1.0);
    //velocity_limit_curve
    item.velocity_pivot ?? (item.velocity_pivot = create.Vector3(0, 0, 0));
}
