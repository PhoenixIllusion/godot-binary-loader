import { DefaultObject } from './Object.default.js';
export function DefaultOS(item) {
    DefaultObject(item);
    item.delta_smoothing ?? (item.delta_smoothing = true);
    item.low_processor_usage_mode ?? (item.low_processor_usage_mode = false);
    item.low_processor_usage_mode_sleep_usec ?? (item.low_processor_usage_mode_sleep_usec = 6900);
}
