import { DefaultTexture3D } from './Texture3D.default.js';
export function DefaultCompressedTexture3D(item) {
    DefaultTexture3D(item);
    item.load_path ?? (item.load_path = "");
}
