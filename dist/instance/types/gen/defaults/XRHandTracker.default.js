import { DefaultXRPositionalTracker } from './XRPositionalTracker.default';
export function DefaultXRHandTracker(item) {
    DefaultXRPositionalTracker(item);
    item.hand ?? (item.hand = 1);
    item.hand_tracking_source ?? (item.hand_tracking_source = 0);
    item.has_tracking_data ?? (item.has_tracking_data = false);
    item.type ?? (item.type = 16);
}
