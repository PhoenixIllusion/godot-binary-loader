/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultRefCounted } from './RefCounted.default';
export function DefaultPhysicsRayQueryParameters3D(item) {
    DefaultRefCounted(item);
    item.collide_with_areas ?? (item.collide_with_areas = false);
    item.collide_with_bodies ?? (item.collide_with_bodies = true);
    item.collision_mask ?? (item.collision_mask = 4294967295);
    item.exclude ?? (item.exclude = []);
    item.from ?? (item.from = create.Vector3(0, 0, 0));
    item.hit_back_faces ?? (item.hit_back_faces = true);
    item.hit_from_inside ?? (item.hit_from_inside = false);
    item.to ?? (item.to = create.Vector3(0, 0, 0));
}
