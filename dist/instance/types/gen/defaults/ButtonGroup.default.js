import { DefaultResource } from './Resource.default';
export function DefaultButtonGroup(item) {
    DefaultResource(item);
    item.allow_unpress ?? (item.allow_unpress = false);
    item.resource_local_to_scene ?? (item.resource_local_to_scene = true);
}
