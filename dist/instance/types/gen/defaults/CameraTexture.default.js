import { DefaultTexture2D } from './Texture2D.default.js';
export function DefaultCameraTexture(item) {
    DefaultTexture2D(item);
    item.camera_feed_id ?? (item.camera_feed_id = 0);
    item.camera_is_active ?? (item.camera_is_active = false);
    item.resource_local_to_scene ?? (item.resource_local_to_scene = false);
    item.which_feed ?? (item.which_feed = 0);
}
