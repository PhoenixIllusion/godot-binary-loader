import { DefaultXRPositionalTracker } from './XRPositionalTracker.default.js';
export function DefaultXRControllerTracker(item) {
    DefaultXRPositionalTracker(item);
    item.type ?? (item.type = 2);
}
