/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultPhysicsBody3D } from './PhysicsBody3D.default';
export function DefaultRigidBody3D(item) {
    DefaultPhysicsBody3D(item);
    item.angular_damp ?? (item.angular_damp = 0.0);
    item.angular_damp_mode ?? (item.angular_damp_mode = 0);
    item.angular_velocity ?? (item.angular_velocity = create.Vector3(0, 0, 0));
    item.can_sleep ?? (item.can_sleep = true);
    item.center_of_mass ?? (item.center_of_mass = create.Vector3(0, 0, 0));
    item.center_of_mass_mode ?? (item.center_of_mass_mode = 0);
    item.constant_force ?? (item.constant_force = create.Vector3(0, 0, 0));
    item.constant_torque ?? (item.constant_torque = create.Vector3(0, 0, 0));
    item.contact_monitor ?? (item.contact_monitor = false);
    item.continuous_cd ?? (item.continuous_cd = false);
    item.custom_integrator ?? (item.custom_integrator = false);
    item.freeze ?? (item.freeze = false);
    item.freeze_mode ?? (item.freeze_mode = 0);
    item.gravity_scale ?? (item.gravity_scale = 1.0);
    item.inertia ?? (item.inertia = create.Vector3(0, 0, 0));
    item.linear_damp ?? (item.linear_damp = 0.0);
    item.linear_damp_mode ?? (item.linear_damp_mode = 0);
    item.linear_velocity ?? (item.linear_velocity = create.Vector3(0, 0, 0));
    item.lock_rotation ?? (item.lock_rotation = false);
    item.mass ?? (item.mass = 1.0);
    item.max_contacts_reported ?? (item.max_contacts_reported = 0);
    //physics_material_override
    item.sleeping ?? (item.sleeping = false);
}
