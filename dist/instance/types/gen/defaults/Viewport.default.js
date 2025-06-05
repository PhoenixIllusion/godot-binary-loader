import { DefaultNode } from './Node.default';
export function DefaultViewport(item) {
    DefaultNode(item);
    item.audio_listener_enable_2d ?? (item.audio_listener_enable_2d = false);
    item.audio_listener_enable_3d ?? (item.audio_listener_enable_3d = false);
    item.canvas_cull_mask ?? (item.canvas_cull_mask = 4294967295);
    item.canvas_item_default_texture_filter ?? (item.canvas_item_default_texture_filter = 1);
    item.canvas_item_default_texture_repeat ?? (item.canvas_item_default_texture_repeat = 0);
    //canvas_transform
    item.debug_draw ?? (item.debug_draw = 0);
    item.disable_3d ?? (item.disable_3d = false);
    item.fsr_sharpness ?? (item.fsr_sharpness = 0.2);
    //global_canvas_transform
    item.gui_disable_input ?? (item.gui_disable_input = false);
    item.gui_embed_subwindows ?? (item.gui_embed_subwindows = false);
    item.gui_snap_controls_to_pixels ?? (item.gui_snap_controls_to_pixels = true);
    item.handle_input_locally ?? (item.handle_input_locally = true);
    item.mesh_lod_threshold ?? (item.mesh_lod_threshold = 1.0);
    item.msaa_2d ?? (item.msaa_2d = 0);
    item.msaa_3d ?? (item.msaa_3d = 0);
    item.own_world_3d ?? (item.own_world_3d = false);
    item.physics_interpolation_mode ?? (item.physics_interpolation_mode = 1);
    item.physics_object_picking ?? (item.physics_object_picking = false);
    item.physics_object_picking_first_only ?? (item.physics_object_picking_first_only = false);
    item.physics_object_picking_sort ?? (item.physics_object_picking_sort = false);
    item.positional_shadow_atlas_16_bits ?? (item.positional_shadow_atlas_16_bits = true);
    item.positional_shadow_atlas_quad_0 ?? (item.positional_shadow_atlas_quad_0 = 2);
    item.positional_shadow_atlas_quad_1 ?? (item.positional_shadow_atlas_quad_1 = 2);
    item.positional_shadow_atlas_quad_2 ?? (item.positional_shadow_atlas_quad_2 = 3);
    item.positional_shadow_atlas_quad_3 ?? (item.positional_shadow_atlas_quad_3 = 4);
    item.positional_shadow_atlas_size ?? (item.positional_shadow_atlas_size = 2048);
    item.scaling_3d_mode ?? (item.scaling_3d_mode = 0);
    item.scaling_3d_scale ?? (item.scaling_3d_scale = 1.0);
    item.screen_space_aa ?? (item.screen_space_aa = 0);
    item.sdf_oversize ?? (item.sdf_oversize = 1);
    item.sdf_scale ?? (item.sdf_scale = 1);
    item.snap_2d_transforms_to_pixel ?? (item.snap_2d_transforms_to_pixel = false);
    item.snap_2d_vertices_to_pixel ?? (item.snap_2d_vertices_to_pixel = false);
    item.texture_mipmap_bias ?? (item.texture_mipmap_bias = 0.0);
    item.transparent_bg ?? (item.transparent_bg = false);
    item.use_debanding ?? (item.use_debanding = false);
    item.use_hdr_2d ?? (item.use_hdr_2d = false);
    item.use_occlusion_culling ?? (item.use_occlusion_culling = false);
    item.use_taa ?? (item.use_taa = false);
    item.use_xr ?? (item.use_xr = false);
    item.vrs_mode ?? (item.vrs_mode = 0);
    //vrs_texture
    item.vrs_update_mode ?? (item.vrs_update_mode = 1);
    //world_2d
    //world_3d  
}
