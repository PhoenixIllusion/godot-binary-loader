import { DefaultAudioStream } from './AudioStream.default.js';
export function DefaultAudioStreamRandomizer(item) {
    DefaultAudioStream(item);
    item.playback_mode ?? (item.playback_mode = 0);
    item.random_pitch ?? (item.random_pitch = 1.0);
    item.random_volume_offset_db ?? (item.random_volume_offset_db = 0.0);
    item.streams_count ?? (item.streams_count = 0);
}
