/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode2D } from './Node2D.default.js';
export function DefaultJoint2D(item) {
    DefaultNode2D(item);
    item.bias ?? (item.bias = 0.0);
    item.disable_collision ?? (item.disable_collision = true);
    item.node_a ?? (item.node_a = create.NodePath(""));
    item.node_b ?? (item.node_b = create.NodePath(""));
}
