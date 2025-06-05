import { DefaultAudioEffect } from './AudioEffect.default';
export function DefaultAudioEffectAmplify(item) {
    DefaultAudioEffect(item);
    item.volume_db ?? (item.volume_db = 0.0);
}
