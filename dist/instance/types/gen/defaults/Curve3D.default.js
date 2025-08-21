import { DefaultResource } from './Resource.default.js';
export function DefaultCurve3D(item) {
    DefaultResource(item);
    item.bake_interval ?? (item.bake_interval = 0.2);
    item.point_count ?? (item.point_count = 0);
    item.up_vector_enabled ?? (item.up_vector_enabled = true);
}
