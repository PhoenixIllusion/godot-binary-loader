import { DefaultPrimitiveMesh } from './PrimitiveMesh.default';
export function DefaultTorusMesh(item) {
    DefaultPrimitiveMesh(item);
    item.inner_radius ?? (item.inner_radius = 0.5);
    item.outer_radius ?? (item.outer_radius = 1.0);
    item.ring_segments ?? (item.ring_segments = 32);
    item.rings ?? (item.rings = 64);
}
