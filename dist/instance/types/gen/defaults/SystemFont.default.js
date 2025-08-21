/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultFont } from './Font.default.js';
export function DefaultSystemFont(item) {
    DefaultFont(item);
    item.allow_system_fallback ?? (item.allow_system_fallback = true);
    item.antialiasing ?? (item.antialiasing = 1);
    item.disable_embedded_bitmaps ?? (item.disable_embedded_bitmaps = true);
    item.font_italic ?? (item.font_italic = false);
    item.font_names ?? (item.font_names = create.PackedStringArray());
    item.font_stretch ?? (item.font_stretch = 100);
    item.font_weight ?? (item.font_weight = 400);
    item.force_autohinter ?? (item.force_autohinter = false);
    item.generate_mipmaps ?? (item.generate_mipmaps = false);
    item.hinting ?? (item.hinting = 1);
    item.msdf_pixel_range ?? (item.msdf_pixel_range = 16);
    item.msdf_size ?? (item.msdf_size = 48);
    item.multichannel_signed_distance_field ?? (item.multichannel_signed_distance_field = false);
    item.oversampling ?? (item.oversampling = 0.0);
    item.subpixel_positioning ?? (item.subpixel_positioning = 1);
}
