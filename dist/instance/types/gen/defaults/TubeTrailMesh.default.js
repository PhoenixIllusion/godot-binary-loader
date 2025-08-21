import { DefaultPrimitiveMesh } from './PrimitiveMesh.default.js';
export function DefaultTubeTrailMesh(item) {
    DefaultPrimitiveMesh(item);
    item.cap_bottom ?? (item.cap_bottom = true);
    item.cap_top ?? (item.cap_top = true);
    //curve
    item.radial_steps ?? (item.radial_steps = 8);
    item.radius ?? (item.radius = 0.5);
    item.section_length ?? (item.section_length = 0.2);
    item.section_rings ?? (item.section_rings = 3);
    item.sections ?? (item.sections = 5);
}
