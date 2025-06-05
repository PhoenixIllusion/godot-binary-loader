import { DefaultAudioEffect } from './AudioEffect.default';
export function DefaultAudioEffectChorus(item) {
    DefaultAudioEffect(item);
    item.dry ?? (item.dry = 1.0);
    item['voice/1/cutoff_hz'] ?? (item['voice/1/cutoff_hz'] = 8000.0);
    item['voice/1/delay_ms'] ?? (item['voice/1/delay_ms'] = 15.0);
    item['voice/1/depth_ms'] ?? (item['voice/1/depth_ms'] = 2.0);
    item['voice/1/level_db'] ?? (item['voice/1/level_db'] = 0.0);
    item['voice/1/pan'] ?? (item['voice/1/pan'] = -0.5);
    item['voice/1/rate_hz'] ?? (item['voice/1/rate_hz'] = 0.8);
    item['voice/2/cutoff_hz'] ?? (item['voice/2/cutoff_hz'] = 8000.0);
    item['voice/2/delay_ms'] ?? (item['voice/2/delay_ms'] = 20.0);
    item['voice/2/depth_ms'] ?? (item['voice/2/depth_ms'] = 3.0);
    item['voice/2/level_db'] ?? (item['voice/2/level_db'] = 0.0);
    item['voice/2/pan'] ?? (item['voice/2/pan'] = 0.5);
    item['voice/2/rate_hz'] ?? (item['voice/2/rate_hz'] = 1.2);
    //voice/3/cutoff_hz
    //voice/3/delay_ms
    //voice/3/depth_ms
    //voice/3/level_db
    //voice/3/pan
    //voice/3/rate_hz
    //voice/4/cutoff_hz
    //voice/4/delay_ms
    //voice/4/depth_ms
    //voice/4/level_db
    //voice/4/pan
    //voice/4/rate_hz
    item.voice_count ?? (item.voice_count = 2);
    item.wet ?? (item.wet = 0.5);
}
