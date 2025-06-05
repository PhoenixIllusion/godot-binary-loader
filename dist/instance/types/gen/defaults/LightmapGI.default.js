import { DefaultVisualInstance3D } from './VisualInstance3D.default';
export function DefaultLightmapGI(item) {
    DefaultVisualInstance3D(item);
    item.bias ?? (item.bias = 0.0005);
    item.bounce_indirect_energy ?? (item.bounce_indirect_energy = 1.0);
    item.bounces ?? (item.bounces = 3);
    //camera_attributes
    item.denoiser_range ?? (item.denoiser_range = 10);
    item.denoiser_strength ?? (item.denoiser_strength = 0.1);
    item.directional ?? (item.directional = false);
    //environment_custom_color
    //environment_custom_energy
    //environment_custom_sky
    item.environment_mode ?? (item.environment_mode = 1);
    item.generate_probes_subdiv ?? (item.generate_probes_subdiv = 2);
    item.interior ?? (item.interior = false);
    //light_data
    item.max_texture_size ?? (item.max_texture_size = 16384);
    item.quality ?? (item.quality = 1);
    item.texel_scale ?? (item.texel_scale = 1.0);
    item.use_denoiser ?? (item.use_denoiser = true);
    item.use_texture_for_bounces ?? (item.use_texture_for_bounces = true);
}
