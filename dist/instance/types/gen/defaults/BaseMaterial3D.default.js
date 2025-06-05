/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultMaterial } from './Material.default';
export function DefaultBaseMaterial3D(item) {
    DefaultMaterial(item);
    item.albedo_color ?? (item.albedo_color = create.Color(1, 1, 1, 1));
    //albedo_texture
    item.albedo_texture_force_srgb ?? (item.albedo_texture_force_srgb = false);
    item.albedo_texture_msdf ?? (item.albedo_texture_msdf = false);
    //alpha_antialiasing_edge
    //alpha_antialiasing_mode
    //alpha_hash_scale
    //alpha_scissor_threshold
    item.anisotropy ?? (item.anisotropy = 0.0);
    item.anisotropy_enabled ?? (item.anisotropy_enabled = false);
    //anisotropy_flowmap
    item.ao_enabled ?? (item.ao_enabled = false);
    item.ao_light_affect ?? (item.ao_light_affect = 0.0);
    item.ao_on_uv2 ?? (item.ao_on_uv2 = false);
    //ao_texture
    item.ao_texture_channel ?? (item.ao_texture_channel = 0);
    item.backlight ?? (item.backlight = create.Color(0, 0, 0, 1));
    item.backlight_enabled ?? (item.backlight_enabled = false);
    //backlight_texture
    item.billboard_keep_scale ?? (item.billboard_keep_scale = false);
    item.billboard_mode ?? (item.billboard_mode = 0);
    item.blend_mode ?? (item.blend_mode = 0);
    item.clearcoat ?? (item.clearcoat = 1.0);
    item.clearcoat_enabled ?? (item.clearcoat_enabled = false);
    item.clearcoat_roughness ?? (item.clearcoat_roughness = 0.5);
    //clearcoat_texture
    item.cull_mode ?? (item.cull_mode = 0);
    item.depth_draw_mode ?? (item.depth_draw_mode = 0);
    //detail_albedo
    item.detail_blend_mode ?? (item.detail_blend_mode = 0);
    item.detail_enabled ?? (item.detail_enabled = false);
    //detail_mask
    //detail_normal
    item.detail_uv_layer ?? (item.detail_uv_layer = 0);
    item.diffuse_mode ?? (item.diffuse_mode = 0);
    item.disable_ambient_light ?? (item.disable_ambient_light = false);
    item.disable_fog ?? (item.disable_fog = false);
    item.disable_receive_shadows ?? (item.disable_receive_shadows = false);
    item.distance_fade_max_distance ?? (item.distance_fade_max_distance = 10.0);
    item.distance_fade_min_distance ?? (item.distance_fade_min_distance = 0.0);
    item.distance_fade_mode ?? (item.distance_fade_mode = 0);
    item.emission ?? (item.emission = create.Color(0, 0, 0, 1));
    item.emission_enabled ?? (item.emission_enabled = false);
    item.emission_energy_multiplier ?? (item.emission_energy_multiplier = 1.0);
    //emission_intensity
    item.emission_on_uv2 ?? (item.emission_on_uv2 = false);
    item.emission_operator ?? (item.emission_operator = 0);
    //emission_texture
    item.fixed_size ?? (item.fixed_size = false);
    item.grow ?? (item.grow = false);
    item.grow_amount ?? (item.grow_amount = 0.0);
    item.heightmap_deep_parallax ?? (item.heightmap_deep_parallax = false);
    item.heightmap_enabled ?? (item.heightmap_enabled = false);
    item.heightmap_flip_binormal ?? (item.heightmap_flip_binormal = false);
    item.heightmap_flip_tangent ?? (item.heightmap_flip_tangent = false);
    item.heightmap_flip_texture ?? (item.heightmap_flip_texture = false);
    //heightmap_max_layers
    //heightmap_min_layers
    item.heightmap_scale ?? (item.heightmap_scale = 5.0);
    //heightmap_texture
    item.metallic ?? (item.metallic = 0.0);
    item.metallic_specular ?? (item.metallic_specular = 0.5);
    //metallic_texture
    item.metallic_texture_channel ?? (item.metallic_texture_channel = 0);
    item.msdf_outline_size ?? (item.msdf_outline_size = 0.0);
    item.msdf_pixel_range ?? (item.msdf_pixel_range = 4.0);
    item.no_depth_test ?? (item.no_depth_test = false);
    item.normal_enabled ?? (item.normal_enabled = false);
    item.normal_scale ?? (item.normal_scale = 1.0);
    //normal_texture
    //orm_texture
    //particles_anim_h_frames
    //particles_anim_loop
    //particles_anim_v_frames
    item.point_size ?? (item.point_size = 1.0);
    item.proximity_fade_distance ?? (item.proximity_fade_distance = 1.0);
    item.proximity_fade_enabled ?? (item.proximity_fade_enabled = false);
    item.refraction_enabled ?? (item.refraction_enabled = false);
    item.refraction_scale ?? (item.refraction_scale = 0.05);
    //refraction_texture
    item.refraction_texture_channel ?? (item.refraction_texture_channel = 0);
    item.rim ?? (item.rim = 1.0);
    item.rim_enabled ?? (item.rim_enabled = false);
    //rim_texture
    item.rim_tint ?? (item.rim_tint = 0.5);
    item.roughness ?? (item.roughness = 1.0);
    //roughness_texture
    item.roughness_texture_channel ?? (item.roughness_texture_channel = 0);
    item.shading_mode ?? (item.shading_mode = 1);
    item.shadow_to_opacity ?? (item.shadow_to_opacity = false);
    item.specular_mode ?? (item.specular_mode = 0);
    item.subsurf_scatter_enabled ?? (item.subsurf_scatter_enabled = false);
    item.subsurf_scatter_skin_mode ?? (item.subsurf_scatter_skin_mode = false);
    item.subsurf_scatter_strength ?? (item.subsurf_scatter_strength = 0.0);
    //subsurf_scatter_texture
    item.subsurf_scatter_transmittance_boost ?? (item.subsurf_scatter_transmittance_boost = 0.0);
    item.subsurf_scatter_transmittance_color ?? (item.subsurf_scatter_transmittance_color = create.Color(1, 1, 1, 1));
    item.subsurf_scatter_transmittance_depth ?? (item.subsurf_scatter_transmittance_depth = 0.1);
    item.subsurf_scatter_transmittance_enabled ?? (item.subsurf_scatter_transmittance_enabled = false);
    //subsurf_scatter_transmittance_texture
    item.texture_filter ?? (item.texture_filter = 3);
    item.texture_repeat ?? (item.texture_repeat = true);
    item.transparency ?? (item.transparency = 0);
    item.use_particle_trails ?? (item.use_particle_trails = false);
    item.use_point_size ?? (item.use_point_size = false);
    item.uv1_offset ?? (item.uv1_offset = create.Vector3(0, 0, 0));
    item.uv1_scale ?? (item.uv1_scale = create.Vector3(1, 1, 1));
    item.uv1_triplanar ?? (item.uv1_triplanar = false);
    item.uv1_triplanar_sharpness ?? (item.uv1_triplanar_sharpness = 1.0);
    item.uv1_world_triplanar ?? (item.uv1_world_triplanar = false);
    item.uv2_offset ?? (item.uv2_offset = create.Vector3(0, 0, 0));
    item.uv2_scale ?? (item.uv2_scale = create.Vector3(1, 1, 1));
    item.uv2_triplanar ?? (item.uv2_triplanar = false);
    item.uv2_triplanar_sharpness ?? (item.uv2_triplanar_sharpness = 1.0);
    item.uv2_world_triplanar ?? (item.uv2_world_triplanar = false);
    item.vertex_color_is_srgb ?? (item.vertex_color_is_srgb = false);
    item.vertex_color_use_as_albedo ?? (item.vertex_color_use_as_albedo = false);
}
