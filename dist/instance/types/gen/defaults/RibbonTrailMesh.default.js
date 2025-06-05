import { DefaultPrimitiveMesh } from './PrimitiveMesh.default';
export function DefaultRibbonTrailMesh(item) {
    DefaultPrimitiveMesh(item);
    //curve
    item.section_length ?? (item.section_length = 0.2);
    item.section_segments ?? (item.section_segments = 3);
    item.sections ?? (item.sections = 5);
    item.shape ?? (item.shape = 1);
    item.size ?? (item.size = 1.0);
}
