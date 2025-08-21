/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default.js';
export function DefaultNavigationLink2D(item) {
    DefaultNode2D(item);
    item.bidirectional ?? (item.bidirectional = true);
    item.enabled ?? (item.enabled = true);
    item.end_position ?? (item.end_position = create.Vector2(0, 0));
    item.enter_cost ?? (item.enter_cost = 0.0);
    item.navigation_layers ?? (item.navigation_layers = 1);
    item.start_position ?? (item.start_position = create.Vector2(0, 0));
    item.travel_cost ?? (item.travel_cost = 1.0);
}
