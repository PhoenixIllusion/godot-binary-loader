/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultRefCounted } from './RefCounted.default.js';
export function DefaultPhysicsTestMotionParameters2D(item) {
    DefaultRefCounted(item);
    item.collide_separation_ray ?? (item.collide_separation_ray = false);
    item.exclude_bodies ?? (item.exclude_bodies = []);
    item.exclude_objects ?? (item.exclude_objects = []);
    item.from ?? (item.from = create.Transform2D(1, 0, 0, 1, 0, 0));
    item.margin ?? (item.margin = 0.08);
    item.motion ?? (item.motion = create.Vector2(0, 0));
    item.recovery_as_collision ?? (item.recovery_as_collision = false);
}
