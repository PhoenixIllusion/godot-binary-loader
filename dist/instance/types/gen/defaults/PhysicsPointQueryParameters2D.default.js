/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultRefCounted } from './RefCounted.default';
export function DefaultPhysicsPointQueryParameters2D(item) {
    DefaultRefCounted(item);
    item.canvas_instance_id ?? (item.canvas_instance_id = 0);
    item.collide_with_areas ?? (item.collide_with_areas = false);
    item.collide_with_bodies ?? (item.collide_with_bodies = true);
    item.collision_mask ?? (item.collision_mask = 4294967295);
    item.exclude ?? (item.exclude = []);
    item.position ?? (item.position = create.Vector2(0, 0));
}
