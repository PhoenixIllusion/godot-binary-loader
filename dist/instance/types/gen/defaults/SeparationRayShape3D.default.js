import { DefaultShape3D } from './Shape3D.default';
export function DefaultSeparationRayShape3D(item) {
    DefaultShape3D(item);
    item.length ?? (item.length = 1.0);
    item.slide_on_slope ?? (item.slide_on_slope = false);
}
