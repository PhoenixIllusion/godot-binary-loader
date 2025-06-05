import { DefaultAudioEffect } from './AudioEffect.default';
export function DefaultAudioEffectPanner(item) {
    DefaultAudioEffect(item);
    item.pan ?? (item.pan = 0.0);
}
