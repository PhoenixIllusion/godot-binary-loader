/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultPlaneMesh } from './PlaneMesh.default';
export function DefaultQuadMesh(item) {
    DefaultPlaneMesh(item);
    item.orientation ?? (item.orientation = 2);
    item.size ?? (item.size = create.Vector2(1, 1));
}
