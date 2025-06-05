import { DefaultResource } from './Resource.default';
export function DefaultShape3D(item) {
    DefaultResource(item);
    item.custom_solver_bias ?? (item.custom_solver_bias = 0.0);
    item.margin ?? (item.margin = 0.04);
}
