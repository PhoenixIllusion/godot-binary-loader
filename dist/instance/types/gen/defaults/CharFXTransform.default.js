/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultRefCounted } from './RefCounted.default';
export function DefaultCharFXTransform(item) {
    DefaultRefCounted(item);
    item.color ?? (item.color = create.Color(0, 0, 0, 1));
    item.elapsed_time ?? (item.elapsed_time = 0.0);
    //env = {}
    item.font ?? (item.font = create.RID());
    item.glyph_count ?? (item.glyph_count = 0);
    item.glyph_flags ?? (item.glyph_flags = 0);
    item.glyph_index ?? (item.glyph_index = 0);
    item.offset ?? (item.offset = create.Vector2(0, 0));
    item.outline ?? (item.outline = false);
    item.range ?? (item.range = create.Vector2i(0, 0));
    item.relative_index ?? (item.relative_index = 0);
    item.transform ?? (item.transform = create.Transform2D(1, 0, 0, 1, 0, 0));
    item.visible ?? (item.visible = true);
}
