import { DefaultTexture2D } from './Texture2D.default';
export function DefaultCompressedTexture2D(item) {
    DefaultTexture2D(item);
    item.load_path ?? (item.load_path = "");
    item.resource_local_to_scene ?? (item.resource_local_to_scene = false);
}
