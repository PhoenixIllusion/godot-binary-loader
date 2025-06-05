/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultPrimitiveMesh } from './PrimitiveMesh.default';
export function DefaultPrismMesh(item) {
    DefaultPrimitiveMesh(item);
    item.left_to_right ?? (item.left_to_right = 0.5);
    item.size ?? (item.size = create.Vector3(1, 1, 1));
    item.subdivide_depth ?? (item.subdivide_depth = 0);
    item.subdivide_height ?? (item.subdivide_height = 0);
    item.subdivide_width ?? (item.subdivide_width = 0);
}
