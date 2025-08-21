import { DefaultAudioEffect } from './AudioEffect.default.js';
export function DefaultAudioEffectHardLimiter(item) {
    DefaultAudioEffect(item);
    item.ceiling_db ?? (item.ceiling_db = -0.3);
    item.pre_gain_db ?? (item.pre_gain_db = 0.0);
    item.release ?? (item.release = 0.1);
}
