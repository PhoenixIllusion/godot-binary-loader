import { DefaultNode3D } from './Node3D.default.js';
export function DefaultSkeletonModifier3D(item) {
    DefaultNode3D(item);
    item.active ?? (item.active = true);
    item.influence ?? (item.influence = 1.0);
}
