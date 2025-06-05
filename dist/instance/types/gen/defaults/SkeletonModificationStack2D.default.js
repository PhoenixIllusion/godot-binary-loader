import { DefaultResource } from './Resource.default';
export function DefaultSkeletonModificationStack2D(item) {
    DefaultResource(item);
    item.enabled ?? (item.enabled = false);
    item.modification_count ?? (item.modification_count = 0);
    item.strength ?? (item.strength = 1.0);
}
