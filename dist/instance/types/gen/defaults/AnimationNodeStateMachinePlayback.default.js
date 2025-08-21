import { DefaultResource } from './Resource.default.js';
export function DefaultAnimationNodeStateMachinePlayback(item) {
    DefaultResource(item);
    item.resource_local_to_scene ?? (item.resource_local_to_scene = true);
}
