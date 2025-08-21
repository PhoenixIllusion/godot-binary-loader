import { DefaultPrimitiveMesh } from './PrimitiveMesh.default.js';
export function DefaultSphereMesh(item) {
    DefaultPrimitiveMesh(item);
    item.height ?? (item.height = 1.0);
    item.is_hemisphere ?? (item.is_hemisphere = false);
    item.radial_segments ?? (item.radial_segments = 64);
    item.radius ?? (item.radius = 0.5);
    item.rings ?? (item.rings = 32);
}
