import { DefaultResource } from './Resource.default.js';
export function DefaultLightmapGIData(item) {
    DefaultResource(item);
    //light_texture
    item.lightmap_textures ?? (item.lightmap_textures = []);
}
