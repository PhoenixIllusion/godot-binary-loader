/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode3D } from './Node3D.default.js';
export function DefaultJoint3D(item) {
    DefaultNode3D(item);
    item.exclude_nodes_from_collision ?? (item.exclude_nodes_from_collision = true);
    item.node_a ?? (item.node_a = create.NodePath(""));
    item.node_b ?? (item.node_b = create.NodePath(""));
    item.solver_priority ?? (item.solver_priority = 1);
}
