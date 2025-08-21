import { DefaultResource } from './Resource.default.js';
export function DefaultCurve2D(item) {
    DefaultResource(item);
    item.bake_interval ?? (item.bake_interval = 5.0);
    item.point_count ?? (item.point_count = 0);
}
