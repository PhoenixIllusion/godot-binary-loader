import { DefaultNode } from './Node.default';
export function DefaultAudioStreamPlayer(item) {
    DefaultNode(item);
    item.autoplay ?? (item.autoplay = false);
    item.bus ?? (item.bus = "Master");
    item.max_polyphony ?? (item.max_polyphony = 1);
    item.mix_target ?? (item.mix_target = 0);
    item.pitch_scale ?? (item.pitch_scale = 1.0);
    item.playback_type ?? (item.playback_type = 0);
    item.playing ?? (item.playing = false);
    //stream
    item.stream_paused ?? (item.stream_paused = false);
    item.volume_db ?? (item.volume_db = 0.0);
}
