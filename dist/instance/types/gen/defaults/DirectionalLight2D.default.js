import { DefaultLight2D } from './Light2D.default';
export function DefaultDirectionalLight2D(item) {
    DefaultLight2D(item);
    item.height ?? (item.height = 0.0);
    item.max_distance ?? (item.max_distance = 10000.0);
}
