import { DefaultObject } from './Object.default.js';
export function DefaultXRVRS(item) {
    DefaultObject(item);
    item.vrs_min_radius ?? (item.vrs_min_radius = 20.0);
    item.vrs_strength ?? (item.vrs_strength = 1.0);
}
