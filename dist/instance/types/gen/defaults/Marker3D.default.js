import { DefaultNode3D } from './Node3D.default';
export function DefaultMarker3D(item) {
    DefaultNode3D(item);
    item.gizmo_extents ?? (item.gizmo_extents = 0.25);
}
