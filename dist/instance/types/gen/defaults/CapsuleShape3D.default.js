import { DefaultShape3D } from './Shape3D.default.js';
export function DefaultCapsuleShape3D(item) {
    DefaultShape3D(item);
    item.height ?? (item.height = 2.0);
    item.radius ?? (item.radius = 0.5);
}
