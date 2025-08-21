/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultFont } from './Font.default.js';
export function DefaultFontVariation(item) {
    DefaultFont(item);
    //base_font
    item.baseline_offset ?? (item.baseline_offset = 0.0);
    //opentype_features = {}
    item.spacing_bottom ?? (item.spacing_bottom = 0);
    item.spacing_glyph ?? (item.spacing_glyph = 0);
    item.spacing_space ?? (item.spacing_space = 0);
    item.spacing_top ?? (item.spacing_top = 0);
    item.variation_embolden ?? (item.variation_embolden = 0.0);
    item.variation_face_index ?? (item.variation_face_index = 0);
    //variation_opentype = {}
    item.variation_transform ?? (item.variation_transform = create.Transform2D(1, 0, 0, 1, 0, 0));
}
