import { DefaultAudioEffect } from './AudioEffect.default';
export function DefaultAudioEffectPhaser(item) {
    DefaultAudioEffect(item);
    item.depth ?? (item.depth = 1.0);
    item.feedback ?? (item.feedback = 0.7);
    item.range_max_hz ?? (item.range_max_hz = 1600.0);
    item.range_min_hz ?? (item.range_min_hz = 440.0);
    item.rate_hz ?? (item.rate_hz = 0.5);
}
