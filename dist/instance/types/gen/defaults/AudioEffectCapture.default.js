import { DefaultAudioEffect } from './AudioEffect.default';
export function DefaultAudioEffectCapture(item) {
    DefaultAudioEffect(item);
    item.buffer_length ?? (item.buffer_length = 0.1);
}
