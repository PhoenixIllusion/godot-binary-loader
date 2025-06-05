import { DefaultAudioEffect } from './AudioEffect.default';
export function DefaultAudioEffectStereoEnhance(item) {
    DefaultAudioEffect(item);
    item.pan_pullout ?? (item.pan_pullout = 1.0);
    item.surround ?? (item.surround = 0.0);
    item.time_pullout_ms ?? (item.time_pullout_ms = 0.0);
}
