import { DefaultNode2D } from './Node2D.default.js';
export function DefaultMarker2D(item) {
    DefaultNode2D(item);
    item.gizmo_extents ?? (item.gizmo_extents = 10.0);
}
