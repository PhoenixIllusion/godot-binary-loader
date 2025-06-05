import { DefaultControl } from './Control.default';
export function DefaultVideoStreamPlayer(item) {
    DefaultControl(item);
    item.audio_track ?? (item.audio_track = 0);
    item.autoplay ?? (item.autoplay = false);
    item.buffering_msec ?? (item.buffering_msec = 500);
    item.bus ?? (item.bus = "Master");
    item.expand ?? (item.expand = false);
    item.loop ?? (item.loop = false);
    item.paused ?? (item.paused = false);
    //stream
    //stream_position
    //volume
    item.volume_db ?? (item.volume_db = 0.0);
}
