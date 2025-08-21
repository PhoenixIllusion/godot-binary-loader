/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultPrimitiveMesh } from './PrimitiveMesh.default.js';
export function DefaultPlaneMesh(item) {
    DefaultPrimitiveMesh(item);
    item.center_offset ?? (item.center_offset = create.Vector3(0, 0, 0));
    item.orientation ?? (item.orientation = 1);
    item.size ?? (item.size = create.Vector2(2, 2));
    item.subdivide_depth ?? (item.subdivide_depth = 0);
    item.subdivide_width ?? (item.subdivide_width = 0);
}
