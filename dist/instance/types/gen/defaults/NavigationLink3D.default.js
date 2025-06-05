/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode3D } from './Node3D.default';
export function DefaultNavigationLink3D(item) {
    DefaultNode3D(item);
    item.bidirectional ?? (item.bidirectional = true);
    item.enabled ?? (item.enabled = true);
    item.end_position ?? (item.end_position = create.Vector3(0, 0, 0));
    item.enter_cost ?? (item.enter_cost = 0.0);
    item.navigation_layers ?? (item.navigation_layers = 1);
    item.start_position ?? (item.start_position = create.Vector3(0, 0, 0));
    item.travel_cost ?? (item.travel_cost = 1.0);
}
