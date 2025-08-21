import { DefaultAudioEffect } from './AudioEffect.default.js';
export function DefaultAudioEffectRecord(item) {
    DefaultAudioEffect(item);
    item.format ?? (item.format = 1);
}
