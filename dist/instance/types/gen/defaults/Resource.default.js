import { DefaultRefCounted } from './RefCounted.default.js';
export function DefaultResource(item) {
    DefaultRefCounted(item);
    item.resource_local_to_scene ?? (item.resource_local_to_scene = false);
    item.resource_name ?? (item.resource_name = "");
    item.resource_path ?? (item.resource_path = "");
    //resource_scene_unique_id  
}
