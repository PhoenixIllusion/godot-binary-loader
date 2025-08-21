import { DefaultNode3D } from './Node3D.default.js';
export function DefaultAudioStreamPlayer3D(item) {
    DefaultNode3D(item);
    item.area_mask ?? (item.area_mask = 1);
    item.attenuation_filter_cutoff_hz ?? (item.attenuation_filter_cutoff_hz = 5000.0);
    item.attenuation_filter_db ?? (item.attenuation_filter_db = -24.0);
    item.attenuation_model ?? (item.attenuation_model = 0);
    item.autoplay ?? (item.autoplay = false);
    item.bus ?? (item.bus = "Master");
    item.doppler_tracking ?? (item.doppler_tracking = 0);
    item.emission_angle_degrees ?? (item.emission_angle_degrees = 45.0);
    item.emission_angle_enabled ?? (item.emission_angle_enabled = false);
    item.emission_angle_filter_attenuation_db ?? (item.emission_angle_filter_attenuation_db = -12.0);
    item.max_db ?? (item.max_db = 3.0);
    item.max_distance ?? (item.max_distance = 0.0);
    item.max_polyphony ?? (item.max_polyphony = 1);
    item.panning_strength ?? (item.panning_strength = 1.0);
    item.pitch_scale ?? (item.pitch_scale = 1.0);
    item.playback_type ?? (item.playback_type = 0);
    item.playing ?? (item.playing = false);
    //stream
    item.stream_paused ?? (item.stream_paused = false);
    item.unit_size ?? (item.unit_size = 10.0);
    item.volume_db ?? (item.volume_db = 0.0);
}
