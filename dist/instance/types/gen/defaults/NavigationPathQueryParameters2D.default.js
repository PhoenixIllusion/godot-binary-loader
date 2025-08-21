/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultRefCounted } from './RefCounted.default.js';
export function DefaultNavigationPathQueryParameters2D(item) {
    DefaultRefCounted(item);
    item.map ?? (item.map = create.RID());
    item.metadata_flags ?? (item.metadata_flags = 7);
    item.navigation_layers ?? (item.navigation_layers = 1);
    item.path_postprocessing ?? (item.path_postprocessing = 0);
    item.pathfinding_algorithm ?? (item.pathfinding_algorithm = 0);
    item.simplify_epsilon ?? (item.simplify_epsilon = 0.0);
    item.simplify_path ?? (item.simplify_path = false);
    item.start_position ?? (item.start_position = create.Vector2(0, 0));
    item.target_position ?? (item.target_position = create.Vector2(0, 0));
}
