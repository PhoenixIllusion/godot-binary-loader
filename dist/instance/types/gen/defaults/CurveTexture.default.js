import { DefaultTexture2D } from './Texture2D.default';
export function DefaultCurveTexture(item) {
    DefaultTexture2D(item);
    //curve
    item.resource_local_to_scene ?? (item.resource_local_to_scene = false);
    item.texture_mode ?? (item.texture_mode = 0);
    item.width ?? (item.width = 256);
}
