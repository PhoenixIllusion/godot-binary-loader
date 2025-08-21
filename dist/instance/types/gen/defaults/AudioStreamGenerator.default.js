import { DefaultAudioStream } from './AudioStream.default.js';
export function DefaultAudioStreamGenerator(item) {
    DefaultAudioStream(item);
    item.buffer_length ?? (item.buffer_length = 0.5);
    item.mix_rate ?? (item.mix_rate = 44100.0);
}
