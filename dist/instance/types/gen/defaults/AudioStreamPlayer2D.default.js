import { DefaultNode2D } from './Node2D.default.js';
export function DefaultAudioStreamPlayer2D(item) {
    DefaultNode2D(item);
    item.area_mask ?? (item.area_mask = 1);
    item.attenuation ?? (item.attenuation = 1.0);
    item.autoplay ?? (item.autoplay = false);
    item.bus ?? (item.bus = "Master");
    item.max_distance ?? (item.max_distance = 2000.0);
    item.max_polyphony ?? (item.max_polyphony = 1);
    item.panning_strength ?? (item.panning_strength = 1.0);
    item.pitch_scale ?? (item.pitch_scale = 1.0);
    item.playback_type ?? (item.playback_type = 0);
    item.playing ?? (item.playing = false);
    //stream
    item.stream_paused ?? (item.stream_paused = false);
    item.volume_db ?? (item.volume_db = 0.0);
}
