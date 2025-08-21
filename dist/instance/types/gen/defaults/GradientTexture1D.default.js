import { DefaultTexture2D } from './Texture2D.default.js';
export function DefaultGradientTexture1D(item) {
    DefaultTexture2D(item);
    //gradient
    item.resource_local_to_scene ?? (item.resource_local_to_scene = false);
    item.use_hdr ?? (item.use_hdr = false);
    item.width ?? (item.width = 256);
}
