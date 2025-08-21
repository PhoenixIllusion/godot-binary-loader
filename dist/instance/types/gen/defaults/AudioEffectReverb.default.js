import { DefaultAudioEffect } from './AudioEffect.default.js';
export function DefaultAudioEffectReverb(item) {
    DefaultAudioEffect(item);
    item.damping ?? (item.damping = 0.5);
    item.dry ?? (item.dry = 1.0);
    item.hipass ?? (item.hipass = 0.0);
    item.predelay_feedback ?? (item.predelay_feedback = 0.4);
    item.predelay_msec ?? (item.predelay_msec = 150.0);
    item.room_size ?? (item.room_size = 0.8);
    item.spread ?? (item.spread = 1.0);
    item.wet ?? (item.wet = 0.5);
}
