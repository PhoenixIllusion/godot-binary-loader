/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default.js';
export function DefaultPolygon2D(item) {
    DefaultNode2D(item);
    item.antialiased ?? (item.antialiased = false);
    item.color ?? (item.color = create.Color(1, 1, 1, 1));
    item.internal_vertex_count ?? (item.internal_vertex_count = 0);
    item.invert_border ?? (item.invert_border = 100.0);
    item.invert_enabled ?? (item.invert_enabled = false);
    item.offset ?? (item.offset = create.Vector2(0, 0));
    item.polygon ?? (item.polygon = create.PackedVector2Array());
    item.polygons ?? (item.polygons = []);
    item.skeleton ?? (item.skeleton = create.NodePath(""));
    //texture
    item.texture_offset ?? (item.texture_offset = create.Vector2(0, 0));
    item.texture_rotation ?? (item.texture_rotation = 0.0);
    item.texture_scale ?? (item.texture_scale = create.Vector2(1, 1));
    item.uv ?? (item.uv = create.PackedVector2Array());
    item.vertex_colors ?? (item.vertex_colors = create.PackedColorArray());
}
