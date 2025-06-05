import { DefaultShape2D } from './Shape2D.default';
export function DefaultCircleShape2D(item) {
    DefaultShape2D(item);
    item.radius ?? (item.radius = 10.0);
}
