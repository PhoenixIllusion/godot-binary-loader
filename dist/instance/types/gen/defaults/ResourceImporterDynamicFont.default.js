import { DefaultResourceImporter } from './ResourceImporter.default';
export function DefaultResourceImporterDynamicFont(item) {
    DefaultResourceImporter(item);
    item.allow_system_fallback ?? (item.allow_system_fallback = true);
    item.antialiasing ?? (item.antialiasing = 1);
    item.compress ?? (item.compress = true);
    item.disable_embedded_bitmaps ?? (item.disable_embedded_bitmaps = true);
    item.fallbacks ?? (item.fallbacks = []);
    item.force_autohinter ?? (item.force_autohinter = false);
    item.generate_mipmaps ?? (item.generate_mipmaps = false);
    item.hinting ?? (item.hinting = 1);
    //language_support = {}
    item.msdf_pixel_range ?? (item.msdf_pixel_range = 8);
    item.msdf_size ?? (item.msdf_size = 48);
    item.multichannel_signed_distance_field ?? (item.multichannel_signed_distance_field = false);
    //opentype_features = {}
    item.oversampling ?? (item.oversampling = 0.0);
    item.preload ?? (item.preload = []);
    //script_support = {}
    item.subpixel_positioning ?? (item.subpixel_positioning = 4);
}
