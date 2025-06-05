/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultRefCounted } from './RefCounted.default';
export function DefaultPhysicsShapeQueryParameters3D(item) {
    DefaultRefCounted(item);
    item.collide_with_areas ?? (item.collide_with_areas = false);
    item.collide_with_bodies ?? (item.collide_with_bodies = true);
    item.collision_mask ?? (item.collision_mask = 4294967295);
    item.exclude ?? (item.exclude = []);
    item.margin ?? (item.margin = 0.0);
    item.motion ?? (item.motion = create.Vector3(0, 0, 0));
    //shape
    item.shape_rid ?? (item.shape_rid = create.RID());
    item.transform ?? (item.transform = create.Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0));
}
