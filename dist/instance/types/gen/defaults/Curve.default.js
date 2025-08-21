import { DefaultResource } from './Resource.default.js';
export function DefaultCurve(item) {
    DefaultResource(item);
    item.bake_resolution ?? (item.bake_resolution = 100);
    item.max_value ?? (item.max_value = 1.0);
    item.min_value ?? (item.min_value = 0.0);
    item.point_count ?? (item.point_count = 0);
}
