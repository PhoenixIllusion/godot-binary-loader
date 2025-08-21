import { DefaultShape3D } from './Shape3D.default.js';
export function DefaultSphereShape3D(item) {
    DefaultShape3D(item);
    item.radius ?? (item.radius = 0.5);
}
