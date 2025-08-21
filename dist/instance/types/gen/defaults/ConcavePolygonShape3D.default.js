import { DefaultShape3D } from './Shape3D.default.js';
export function DefaultConcavePolygonShape3D(item) {
    DefaultShape3D(item);
    item.backface_collision ?? (item.backface_collision = false);
}
