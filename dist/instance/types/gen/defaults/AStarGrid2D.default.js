/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultRefCounted } from './RefCounted.default';
export function DefaultAStarGrid2D(item) {
    DefaultRefCounted(item);
    item.cell_shape ?? (item.cell_shape = 0);
    item.cell_size ?? (item.cell_size = create.Vector2(1, 1));
    item.default_compute_heuristic ?? (item.default_compute_heuristic = 0);
    item.default_estimate_heuristic ?? (item.default_estimate_heuristic = 0);
    item.diagonal_mode ?? (item.diagonal_mode = 0);
    item.jumping_enabled ?? (item.jumping_enabled = false);
    item.offset ?? (item.offset = create.Vector2(0, 0));
    item.region ?? (item.region = create.Rect2i(0, 0, 0, 0));
    item.size ?? (item.size = create.Vector2i(0, 0));
}
