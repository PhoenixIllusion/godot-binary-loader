/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultResourceImporter } from './ResourceImporter.default';
export function DefaultResourceImporterImageFont(item) {
    DefaultResourceImporter(item);
    item.ascent ?? (item.ascent = 0);
    item.character_margin ?? (item.character_margin = create.Rect2i(0, 0, 0, 0));
    item.character_ranges ?? (item.character_ranges = create.PackedStringArray());
    item.columns ?? (item.columns = 1);
    item.compress ?? (item.compress = true);
    item.descent ?? (item.descent = 0);
    item.fallbacks ?? (item.fallbacks = []);
    item.image_margin ?? (item.image_margin = create.Rect2i(0, 0, 0, 0));
    item.kerning_pairs ?? (item.kerning_pairs = create.PackedStringArray());
    item.rows ?? (item.rows = 1);
    item.scaling_mode ?? (item.scaling_mode = 2);
}
