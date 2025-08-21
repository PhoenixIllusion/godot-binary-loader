import { DefaultAudioStream } from './AudioStream.default.js';
export function DefaultAudioStreamPolyphonic(item) {
    DefaultAudioStream(item);
    item.polyphony ?? (item.polyphony = 32);
}
