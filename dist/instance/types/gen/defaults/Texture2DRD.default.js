import { DefaultTexture2D } from './Texture2D.default';
export function DefaultTexture2DRD(item) {
    DefaultTexture2D(item);
    item.resource_local_to_scene ?? (item.resource_local_to_scene = false);
    //texture_rd_rid  
}
