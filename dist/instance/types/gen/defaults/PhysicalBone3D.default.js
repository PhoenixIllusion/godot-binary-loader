/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultPhysicsBody3D } from './PhysicsBody3D.default';
export function DefaultPhysicalBone3D(item) {
    DefaultPhysicsBody3D(item);
    item.angular_damp ?? (item.angular_damp = 0.0);
    item.angular_damp_mode ?? (item.angular_damp_mode = 0);
    item.angular_velocity ?? (item.angular_velocity = create.Vector3(0, 0, 0));
    item.body_offset ?? (item.body_offset = create.Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0));
    item.bounce ?? (item.bounce = 0.0);
    item.can_sleep ?? (item.can_sleep = true);
    item.custom_integrator ?? (item.custom_integrator = false);
    item.friction ?? (item.friction = 1.0);
    item.gravity_scale ?? (item.gravity_scale = 1.0);
    item.joint_offset ?? (item.joint_offset = create.Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0));
    item.joint_rotation ?? (item.joint_rotation = create.Vector3(0, 0, 0));
    item.joint_type ?? (item.joint_type = 0);
    item.linear_damp ?? (item.linear_damp = 0.0);
    item.linear_damp_mode ?? (item.linear_damp_mode = 0);
    item.linear_velocity ?? (item.linear_velocity = create.Vector3(0, 0, 0));
    item.mass ?? (item.mass = 1.0);
}
