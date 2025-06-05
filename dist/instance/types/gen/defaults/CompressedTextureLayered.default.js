import { DefaultTextureLayered } from './TextureLayered.default';
export function DefaultCompressedTextureLayered(item) {
    DefaultTextureLayered(item);
    item.load_path ?? (item.load_path = "");
}
