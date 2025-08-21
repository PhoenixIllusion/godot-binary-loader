import { DefaultAudioEffect } from './AudioEffect.default.js';
export function DefaultAudioEffectDistortion(item) {
    DefaultAudioEffect(item);
    item.drive ?? (item.drive = 0.0);
    item.keep_hf_hz ?? (item.keep_hf_hz = 16000.0);
    item.mode ?? (item.mode = 0);
    item.post_gain ?? (item.post_gain = 0.0);
    item.pre_gain ?? (item.pre_gain = 0.0);
}
