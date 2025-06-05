import { DefaultAudioStream } from './AudioStream.default';
export function DefaultAudioStreamPolyphonic(item) {
    DefaultAudioStream(item);
    item.polyphony ?? (item.polyphony = 32);
}
