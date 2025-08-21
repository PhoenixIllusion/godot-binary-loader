import { DefaultPrimitiveMesh } from './PrimitiveMesh.default.js';
export function DefaultCylinderMesh(item) {
    DefaultPrimitiveMesh(item);
    item.bottom_radius ?? (item.bottom_radius = 0.5);
    item.cap_bottom ?? (item.cap_bottom = true);
    item.cap_top ?? (item.cap_top = true);
    item.height ?? (item.height = 2.0);
    item.radial_segments ?? (item.radial_segments = 64);
    item.rings ?? (item.rings = 4);
    item.top_radius ?? (item.top_radius = 0.5);
}
