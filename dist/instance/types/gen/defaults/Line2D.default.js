/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default.js';
export function DefaultLine2D(item) {
    DefaultNode2D(item);
    item.antialiased ?? (item.antialiased = false);
    item.begin_cap_mode ?? (item.begin_cap_mode = 0);
    item.closed ?? (item.closed = false);
    item.default_color ?? (item.default_color = create.Color(1, 1, 1, 1));
    item.end_cap_mode ?? (item.end_cap_mode = 0);
    //gradient
    item.joint_mode ?? (item.joint_mode = 0);
    item.points ?? (item.points = create.PackedVector2Array());
    item.round_precision ?? (item.round_precision = 8);
    item.sharp_limit ?? (item.sharp_limit = 2.0);
    //texture
    item.texture_mode ?? (item.texture_mode = 0);
    item.width ?? (item.width = 10.0);
    //width_curve  
}
