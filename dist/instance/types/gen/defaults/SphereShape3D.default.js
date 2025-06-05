import { DefaultShape3D } from './Shape3D.default';
export function DefaultSphereShape3D(item) {
    DefaultShape3D(item);
    item.radius ?? (item.radius = 0.5);
}
