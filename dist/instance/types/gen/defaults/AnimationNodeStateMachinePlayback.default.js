import { DefaultResource } from './Resource.default';
export function DefaultAnimationNodeStateMachinePlayback(item) {
    DefaultResource(item);
    item.resource_local_to_scene ?? (item.resource_local_to_scene = true);
}
