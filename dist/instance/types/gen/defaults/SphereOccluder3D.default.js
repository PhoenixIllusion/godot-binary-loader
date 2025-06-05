import { DefaultOccluder3D } from './Occluder3D.default';
export function DefaultSphereOccluder3D(item) {
    DefaultOccluder3D(item);
    item.radius ?? (item.radius = 1.0);
}
