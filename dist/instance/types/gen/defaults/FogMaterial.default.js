/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultMaterial } from './Material.default';
export function DefaultFogMaterial(item) {
    DefaultMaterial(item);
    item.albedo ?? (item.albedo = create.Color(1, 1, 1, 1));
    item.density ?? (item.density = 1.0);
    //density_texture
    item.edge_fade ?? (item.edge_fade = 0.1);
    item.emission ?? (item.emission = create.Color(0, 0, 0, 1));
    item.height_falloff ?? (item.height_falloff = 0.0);
}
