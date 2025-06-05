/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultAnimationRootNode } from './AnimationRootNode.default';
export function DefaultAnimationNodeBlendSpace2D(item) {
    DefaultAnimationRootNode(item);
    item.auto_triangles ?? (item.auto_triangles = true);
    item.blend_mode ?? (item.blend_mode = 0);
    item.max_space ?? (item.max_space = create.Vector2(1, 1));
    item.min_space ?? (item.min_space = create.Vector2(-1, -1));
    item.snap ?? (item.snap = create.Vector2(0.1, 0.1));
    item.sync ?? (item.sync = false);
    item.x_label ?? (item.x_label = "x");
    item.y_label ?? (item.y_label = "y");
}
