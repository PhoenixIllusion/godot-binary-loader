/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode } from './Node.default';
export function DefaultNode3D(item) {
    DefaultNode(item);
    //basis
    //global_basis
    //global_position
    //global_rotation
    //global_rotation_degrees
    //global_transform
    item.position ?? (item.position = create.Vector3(0, 0, 0));
    //quaternion
    item.rotation ?? (item.rotation = create.Vector3(0, 0, 0));
    //rotation_degrees
    item.rotation_edit_mode ?? (item.rotation_edit_mode = 0);
    item.rotation_order ?? (item.rotation_order = 2);
    item.scale ?? (item.scale = create.Vector3(1, 1, 1));
    item.top_level ?? (item.top_level = false);
    item.transform ?? (item.transform = create.Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0));
    item.visibility_parent ?? (item.visibility_parent = create.NodePath(""));
    item.visible ?? (item.visible = true);
}
