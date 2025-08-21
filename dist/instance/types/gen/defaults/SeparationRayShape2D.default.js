import { DefaultShape2D } from './Shape2D.default.js';
export function DefaultSeparationRayShape2D(item) {
    DefaultShape2D(item);
    item.length ?? (item.length = 20.0);
    item.slide_on_slope ?? (item.slide_on_slope = false);
}
