import { DefaultTexture3D } from './Texture3D.default';
export function DefaultCompressedTexture3D(item) {
    DefaultTexture3D(item);
    item.load_path ?? (item.load_path = "");
}
