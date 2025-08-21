import { DefaultShape2D } from './Shape2D.default.js';
export function DefaultCapsuleShape2D(item) {
    DefaultShape2D(item);
    item.height ?? (item.height = 30.0);
    item.radius ?? (item.radius = 10.0);
}
