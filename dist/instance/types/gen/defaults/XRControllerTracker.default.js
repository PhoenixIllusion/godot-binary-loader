import { DefaultXRPositionalTracker } from './XRPositionalTracker.default';
export function DefaultXRControllerTracker(item) {
    DefaultXRPositionalTracker(item);
    item.type ?? (item.type = 2);
}
