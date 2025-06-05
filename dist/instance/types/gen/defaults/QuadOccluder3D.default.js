/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultOccluder3D } from './Occluder3D.default';
export function DefaultQuadOccluder3D(item) {
    DefaultOccluder3D(item);
    item.size ?? (item.size = create.Vector2(1, 1));
}
