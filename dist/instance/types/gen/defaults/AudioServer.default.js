import { DefaultObject } from './Object.default';
export function DefaultAudioServer(item) {
    DefaultObject(item);
    item.bus_count ?? (item.bus_count = 1);
    item.input_device ?? (item.input_device = "Default");
    item.output_device ?? (item.output_device = "Default");
    item.playback_speed_scale ?? (item.playback_speed_scale = 1.0);
}
