/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultRigidBody2D } from './RigidBody2D.default';
export function DefaultPhysicalBone2D(item) {
    DefaultRigidBody2D(item);
    item.auto_configure_joint ?? (item.auto_configure_joint = true);
    item.bone2d_index ?? (item.bone2d_index = -1);
    item.bone2d_nodepath ?? (item.bone2d_nodepath = create.NodePath(""));
    item.follow_bone_when_simulating ?? (item.follow_bone_when_simulating = false);
    item.simulate_physics ?? (item.simulate_physics = false);
}
