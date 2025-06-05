import { DefaultAudioEffect } from './AudioEffect.default';
export function DefaultAudioEffectLimiter(item) {
    DefaultAudioEffect(item);
    item.ceiling_db ?? (item.ceiling_db = -0.1);
    item.soft_clip_db ?? (item.soft_clip_db = 2.0);
    item.soft_clip_ratio ?? (item.soft_clip_ratio = 10.0);
    item.threshold_db ?? (item.threshold_db = 0.0);
}
