import { DefaultAudioEffect } from './AudioEffect.default';
export function DefaultAudioEffectRecord(item) {
    DefaultAudioEffect(item);
    item.format ?? (item.format = 1);
}
