import { DefaultPrimitiveMesh } from './PrimitiveMesh.default.js';
export function DefaultCapsuleMesh(item) {
    DefaultPrimitiveMesh(item);
    item.height ?? (item.height = 2.0);
    item.radial_segments ?? (item.radial_segments = 64);
    item.radius ?? (item.radius = 0.5);
    item.rings ?? (item.rings = 8);
}
