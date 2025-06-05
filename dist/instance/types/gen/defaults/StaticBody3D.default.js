/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultPhysicsBody3D } from './PhysicsBody3D.default';
export function DefaultStaticBody3D(item) {
    DefaultPhysicsBody3D(item);
    item.constant_angular_velocity ?? (item.constant_angular_velocity = create.Vector3(0, 0, 0));
    item.constant_linear_velocity ?? (item.constant_linear_velocity = create.Vector3(0, 0, 0));
    //physics_material_override  
}
