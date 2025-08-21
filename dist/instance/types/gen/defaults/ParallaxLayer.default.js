/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default.js';
export function DefaultParallaxLayer(item) {
    DefaultNode2D(item);
    item.motion_mirroring ?? (item.motion_mirroring = create.Vector2(0, 0));
    item.motion_offset ?? (item.motion_offset = create.Vector2(0, 0));
    item.motion_scale ?? (item.motion_scale = create.Vector2(1, 1));
    item.physics_interpolation_mode ?? (item.physics_interpolation_mode = 2);
}
