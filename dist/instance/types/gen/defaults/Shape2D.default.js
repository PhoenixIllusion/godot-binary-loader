import { DefaultResource } from './Resource.default';
export function DefaultShape2D(item) {
    DefaultResource(item);
    item.custom_solver_bias ?? (item.custom_solver_bias = 0.0);
}
