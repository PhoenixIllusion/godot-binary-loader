/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultTileSetSource } from './TileSetSource.default';
export function DefaultTileSetAtlasSource(item) {
    DefaultTileSetSource(item);
    item.margins ?? (item.margins = create.Vector2i(0, 0));
    item.separation ?? (item.separation = create.Vector2i(0, 0));
    //texture
    item.texture_region_size ?? (item.texture_region_size = create.Vector2i(16, 16));
    item.use_texture_padding ?? (item.use_texture_padding = true);
}
