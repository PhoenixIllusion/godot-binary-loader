import { DefaultResource } from './Resource.default';
export function DefaultSkeletonModification2D(item) {
    DefaultResource(item);
    item.enabled ?? (item.enabled = true);
    item.execution_mode ?? (item.execution_mode = 0);
}
