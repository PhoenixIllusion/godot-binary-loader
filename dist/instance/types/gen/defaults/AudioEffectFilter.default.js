import { DefaultAudioEffect } from './AudioEffect.default';
export function DefaultAudioEffectFilter(item) {
    DefaultAudioEffect(item);
    item.cutoff_hz ?? (item.cutoff_hz = 2000.0);
    item.db ?? (item.db = 0);
    item.gain ?? (item.gain = 1.0);
    item.resonance ?? (item.resonance = 0.5);
}
