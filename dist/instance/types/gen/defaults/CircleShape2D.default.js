import { DefaultShape2D } from './Shape2D.default.js';
export function DefaultCircleShape2D(item) {
    DefaultShape2D(item);
    item.radius ?? (item.radius = 10.0);
}
