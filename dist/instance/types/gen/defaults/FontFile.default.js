/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultFont } from './Font.default';
export function DefaultFontFile(item) {
    DefaultFont(item);
    item.allow_system_fallback ?? (item.allow_system_fallback = true);
    item.antialiasing ?? (item.antialiasing = 1);
    item.data ?? (item.data = create.PackedByteArray());
    item.disable_embedded_bitmaps ?? (item.disable_embedded_bitmaps = true);
    item.fixed_size ?? (item.fixed_size = 0);
    item.fixed_size_scale_mode ?? (item.fixed_size_scale_mode = 0);
    item.font_name ?? (item.font_name = "");
    item.font_stretch ?? (item.font_stretch = 100);
    item.font_style ?? (item.font_style = 0);
    item.font_weight ?? (item.font_weight = 400);
    item.force_autohinter ?? (item.force_autohinter = false);
    item.generate_mipmaps ?? (item.generate_mipmaps = false);
    item.hinting ?? (item.hinting = 1);
    item.msdf_pixel_range ?? (item.msdf_pixel_range = 16);
    item.msdf_size ?? (item.msdf_size = 48);
    item.multichannel_signed_distance_field ?? (item.multichannel_signed_distance_field = false);
    //opentype_feature_overrides = {}
    item.oversampling ?? (item.oversampling = 0.0);
    item.style_name ?? (item.style_name = "");
    item.subpixel_positioning ?? (item.subpixel_positioning = 1);
}
