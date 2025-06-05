import { DefaultAudioEffect } from './AudioEffect.default';
export function DefaultAudioEffectSpectrumAnalyzer(item) {
    DefaultAudioEffect(item);
    item.buffer_length ?? (item.buffer_length = 2.0);
    item.fft_size ?? (item.fft_size = 2);
    item.tap_back_pos ?? (item.tap_back_pos = 0.01);
}
