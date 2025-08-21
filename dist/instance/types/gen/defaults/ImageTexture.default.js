import { DefaultTexture2D } from './Texture2D.default.js';
export function DefaultImageTexture(item) {
    DefaultTexture2D(item);
    item.resource_local_to_scene ?? (item.resource_local_to_scene = false);
}
