import { DefaultAudioEffect } from './AudioEffect.default.js';
export function DefaultAudioEffectPitchShift(item) {
    DefaultAudioEffect(item);
    item.fft_size ?? (item.fft_size = 3);
    item.oversampling ?? (item.oversampling = 4);
    item.pitch_scale ?? (item.pitch_scale = 1.0);
}
