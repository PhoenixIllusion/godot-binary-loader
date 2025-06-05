import { DefaultXRPositionalTracker } from './XRPositionalTracker.default';
export function DefaultXRBodyTracker(item) {
    DefaultXRPositionalTracker(item);
    item.body_flags ?? (item.body_flags = 0);
    item.has_tracking_data ?? (item.has_tracking_data = false);
    item.type ?? (item.type = 32);
}
