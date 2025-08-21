import { DefaultAudioEffect } from './AudioEffect.default.js';
export function DefaultAudioEffectCompressor(item) {
    DefaultAudioEffect(item);
    item.attack_us ?? (item.attack_us = 20.0);
    item.gain ?? (item.gain = 0.0);
    item.mix ?? (item.mix = 1.0);
    item.ratio ?? (item.ratio = 4.0);
    item.release_ms ?? (item.release_ms = 250.0);
    item.sidechain ?? (item.sidechain = "");
    item.threshold ?? (item.threshold = 0.0);
}
