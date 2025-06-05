import { DefaultTexture2D } from './Texture2D.default';
export function DefaultCurveXYZTexture(item) {
    DefaultTexture2D(item);
    //curve_x
    //curve_y
    //curve_z
    item.resource_local_to_scene ?? (item.resource_local_to_scene = false);
    item.width ?? (item.width = 256);
}
