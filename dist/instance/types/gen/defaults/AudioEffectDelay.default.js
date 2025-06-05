import { DefaultAudioEffect } from './AudioEffect.default';
export function DefaultAudioEffectDelay(item) {
    DefaultAudioEffect(item);
    item.dry ?? (item.dry = 1.0);
    item.feedback_active ?? (item.feedback_active = false);
    item.feedback_delay_ms ?? (item.feedback_delay_ms = 340.0);
    item.feedback_level_db ?? (item.feedback_level_db = -6.0);
    item.feedback_lowpass ?? (item.feedback_lowpass = 16000.0);
    item.tap1_active ?? (item.tap1_active = true);
    item.tap1_delay_ms ?? (item.tap1_delay_ms = 250.0);
    item.tap1_level_db ?? (item.tap1_level_db = -6.0);
    item.tap1_pan ?? (item.tap1_pan = 0.2);
    item.tap2_active ?? (item.tap2_active = true);
    item.tap2_delay_ms ?? (item.tap2_delay_ms = 500.0);
    item.tap2_level_db ?? (item.tap2_level_db = -12.0);
    item.tap2_pan ?? (item.tap2_pan = -0.4);
}
