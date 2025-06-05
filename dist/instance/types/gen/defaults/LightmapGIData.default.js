import { DefaultResource } from './Resource.default';
export function DefaultLightmapGIData(item) {
    DefaultResource(item);
    //light_texture
    item.lightmap_textures ?? (item.lightmap_textures = []);
}
