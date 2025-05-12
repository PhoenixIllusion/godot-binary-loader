import { float, int, bool, Texture, _Color, _Vector3, Color, Vector3,  } from "./type";

export const enum BGMode {
  BG_CLEAR_COLOR = 0,
  BG_COLOR = 1,
  BG_SKY = 2,
  BG_CANVAS = 3,
  BG_KEEP = 4,
  BG_CAMERA_FEED = 5,
  BG_MAX = 6,
}

export const enum AmbientSource {
  AMBIENT_SOURCE_BG = 0,
  AMBIENT_SOURCE_DISABLED = 1,
  AMBIENT_SOURCE_COLOR = 2,
  AMBIENT_SOURCE_SKY = 3,
}

export const enum ReflectionSource {
  REFLECTION_SOURCE_BG = 0,
  REFLECTION_SOURCE_DISABLED = 1,
  REFLECTION_SOURCE_SKY = 2,
}

export const enum ToneMapper {
  TONE_MAPPER_LINEAR = 0,
  TONE_MAPPER_REINHARDT = 1,
  TONE_MAPPER_FILMIC = 2,
  TONE_MAPPER_ACES = 3,
  TONE_MAPPER_AGX = 4,
}

export const enum GlowBlendMode {
  GLOW_BLEND_MODE_ADDITIVE = 0,
  GLOW_BLEND_MODE_SCREEN = 1,
  GLOW_BLEND_MODE_SOFTLIGHT = 2,
  GLOW_BLEND_MODE_REPLACE = 3,
  GLOW_BLEND_MODE_MIX = 4,
}

export const enum FogMode {
  FOG_MODE_EXPONENTIAL = 0,
  FOG_MODE_DEPTH = 1,
}

export const enum SDFGIYScale {
  SDFGI_Y_SCALE_50_PERCENT = 0,
  SDFGI_Y_SCALE_75_PERCENT = 1,
  SDFGI_Y_SCALE_100_PERCENT = 2,
}

export interface Environment {
  adjustment_brightness: float;
  adjustment_color_correction: Texture;
  adjustment_contrast: float;
  adjustment_enabled: bool;
  adjustment_saturation: float;
  ambient_light_color: Color;
  ambient_light_energy: float;
  ambient_light_sky_contribution: float;
  ambient_light_source: AmbientSource;
  background_camera_feed_id: int;
  background_canvas_max_layer: int;
  background_color: Color;
  background_energy_multiplier: float;
  background_intensity: float;
  background_mode: BGMode;
  fog_aerial_perspective: float;
  fog_density: float;
  fog_depth_begin: float;
  fog_depth_curve: float;
  fog_depth_end: float;
  fog_enabled: bool;
  fog_height: float;
  fog_height_density: float;
  fog_light_color: Color;
  fog_light_energy: float;
  fog_mode: FogMode;
  fog_sky_affect: float;
  fog_sun_scatter: float;
  glow_blend_mode: GlowBlendMode;
  glow_bloom: float;
  glow_enabled: bool;
  glow_hdr_luminance_cap: float;
  glow_hdr_scale: float;
  glow_hdr_threshold: float;
  glow_intensity: float;
  'glow_levels/1': float;
  'glow_levels/2': float;
  'glow_levels/3': float;
  'glow_levels/4': float;
  'glow_levels/5': float;
  'glow_levels/6': float;
  'glow_levels/7': float;
  glow_map: Texture;
  glow_map_strength: float;
  glow_mix: float;
  glow_normalized: bool;
  glow_strength: float;
  reflected_light_source: ReflectionSource;
  sdfgi_bounce_feedback: float;
  sdfgi_cascade0_distance: float;
  sdfgi_cascades: int;
  sdfgi_enabled: bool;
  sdfgi_energy: float;
  sdfgi_max_distance: float;
  sdfgi_min_cell_size: float;
  sdfgi_normal_bias: float;
  sdfgi_probe_bias: float;
  sdfgi_read_sky_light: bool;
  sdfgi_use_occlusion: bool;
  sdfgi_y_scale: SDFGIYScale;
  sky: Sky;
  sky_custom_fov: float;
  sky_rotation: Vector3;
  ssao_ao_channel_affect: float;
  ssao_detail: float;
  ssao_enabled: bool;
  ssao_horizon: float;
  ssao_intensity: float;
  ssao_light_affect: float;
  ssao_power: float;
  ssao_radius: float;
  ssao_sharpness: float;
  ssil_enabled: bool;
  ssil_intensity: float;
  ssil_normal_rejection: float;
  ssil_radius: float;
  ssil_sharpness: float;
  ssr_depth_tolerance: float;
  ssr_enabled: bool;
  ssr_fade_in: float;
  ssr_fade_out: float;
  ssr_max_steps: int;
  tonemap_exposure: float;
  tonemap_mode: ToneMapper;
  tonemap_white: float;
  volumetric_fog_albedo: Color;
  volumetric_fog_ambient_inject: float;
  volumetric_fog_anisotropy: float;
  volumetric_fog_density: float;
  volumetric_fog_detail_spread: float;
  volumetric_fog_emission: Color;
  volumetric_fog_emission_energy: float;
  volumetric_fog_enabled: bool;
  volumetric_fog_gi_inject: float;
  volumetric_fog_length: float;
  volumetric_fog_sky_affect: float;
  volumetric_fog_temporal_reprojection_amount: float;
  volumetric_fog_temporal_reprojection_enabled: bool;
}
export function DefaultEnvironment(item: Environment) {
  item.adjustment_brightness ??= 1.0;
  //item.adjustment_color_correction ??= ;
  item.adjustment_contrast ??= 1.0;
  item.adjustment_enabled ??= false;
  item.adjustment_saturation ??= 1.0;
  item.ambient_light_color ??= _Color(0, 0, 0, 1);
  item.ambient_light_energy ??= 1.0;
  item.ambient_light_sky_contribution ??= 1.0;
  item.ambient_light_source ??= 0;
  item.background_camera_feed_id ??= 1;
  item.background_canvas_max_layer ??= 0;
  item.background_color ??= _Color(0, 0, 0, 1);
  item.background_energy_multiplier ??= 1.0;
  item.background_intensity ??= 30000.0;
  item.background_mode ??= 0;
  item.fog_aerial_perspective ??= 0.0;
  item.fog_density ??= 0.01;
  item.fog_depth_begin ??= 10.0;
  item.fog_depth_curve ??= 1.0;
  item.fog_depth_end ??= 100.0;
  item.fog_enabled ??= false;
  item.fog_height ??= 0.0;
  item.fog_height_density ??= 0.0;
  item.fog_light_color ??= _Color(0.518, 0.553, 0.608, 1);
  item.fog_light_energy ??= 1.0;
  item.fog_mode ??= 0;
  item.fog_sky_affect ??= 1.0;
  item.fog_sun_scatter ??= 0.0;
  item.glow_blend_mode ??= 2;
  item.glow_bloom ??= 0.0;
  item.glow_enabled ??= false;
  item.glow_hdr_luminance_cap ??= 12.0;
  item.glow_hdr_scale ??= 2.0;
  item.glow_hdr_threshold ??= 1.0;
  item.glow_intensity ??= 0.8;
  item['glow_levels/1'] ??= 0.0;
  item['glow_levels/2'] ??= 0.0;
  item['glow_levels/3'] ??= 1.0;
  item['glow_levels/4'] ??= 0.0;
  item['glow_levels/5'] ??= 1.0;
  item['glow_levels/6'] ??= 0.0;
  item['glow_levels/7'] ??= 0.0;
  //item.glow_map ??= ;
  item.glow_map_strength ??= 0.8;
  item.glow_mix ??= 0.05;
  item.glow_normalized ??= false;
  item.glow_strength ??= 1.0;
  item.reflected_light_source ??= 0;
  item.sdfgi_bounce_feedback ??= 0.5;
  item.sdfgi_cascade0_distance ??= 12.8;
  item.sdfgi_cascades ??= 4;
  item.sdfgi_enabled ??= false;
  item.sdfgi_energy ??= 1.0;
  item.sdfgi_max_distance ??= 204.8;
  item.sdfgi_min_cell_size ??= 0.2;
  item.sdfgi_normal_bias ??= 1.1;
  item.sdfgi_probe_bias ??= 1.1;
  item.sdfgi_read_sky_light ??= true;
  item.sdfgi_use_occlusion ??= false;
  item.sdfgi_y_scale ??= 1;
  //item.sky ??= ;
  item.sky_custom_fov ??= 0.0;
  item.sky_rotation ??= _Vector3(0, 0, 0);
  item.ssao_ao_channel_affect ??= 0.0;
  item.ssao_detail ??= 0.5;
  item.ssao_enabled ??= false;
  item.ssao_horizon ??= 0.06;
  item.ssao_intensity ??= 2.0;
  item.ssao_light_affect ??= 0.0;
  item.ssao_power ??= 1.5;
  item.ssao_radius ??= 1.0;
  item.ssao_sharpness ??= 0.98;
  item.ssil_enabled ??= false;
  item.ssil_intensity ??= 1.0;
  item.ssil_normal_rejection ??= 1.0;
  item.ssil_radius ??= 5.0;
  item.ssil_sharpness ??= 0.98;
  item.ssr_depth_tolerance ??= 0.2;
  item.ssr_enabled ??= false;
  item.ssr_fade_in ??= 0.15;
  item.ssr_fade_out ??= 2.0;
  item.ssr_max_steps ??= 64;
  item.tonemap_exposure ??= 1.0;
  item.tonemap_mode ??= 0;
  item.tonemap_white ??= 1.0;
  item.volumetric_fog_albedo ??= _Color(1, 1, 1, 1);
  item.volumetric_fog_ambient_inject ??= 0.0;
  item.volumetric_fog_anisotropy ??= 0.2;
  item.volumetric_fog_density ??= 0.05;
  item.volumetric_fog_detail_spread ??= 2.0;
  item.volumetric_fog_emission ??= _Color(0, 0, 0, 1);
  item.volumetric_fog_emission_energy ??= 1.0;
  item.volumetric_fog_enabled ??= false;
  item.volumetric_fog_gi_inject ??= 1.0;
  item.volumetric_fog_length ??= 64.0;
  item.volumetric_fog_sky_affect ??= 1.0;
  item.volumetric_fog_temporal_reprojection_amount ??= 0.9;
  item.volumetric_fog_temporal_reprojection_enabled ??= true;
}
