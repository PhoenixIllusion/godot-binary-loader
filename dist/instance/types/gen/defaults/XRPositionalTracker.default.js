import { DefaultXRTracker } from './XRTracker.default.js';
export function DefaultXRPositionalTracker(item) {
    DefaultXRTracker(item);
    item.hand ?? (item.hand = 0);
    item.profile ?? (item.profile = "");
}
