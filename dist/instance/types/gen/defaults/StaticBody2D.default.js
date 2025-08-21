/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultPhysicsBody2D } from './PhysicsBody2D.default.js';
export function DefaultStaticBody2D(item) {
    DefaultPhysicsBody2D(item);
    item.constant_angular_velocity ?? (item.constant_angular_velocity = 0.0);
    item.constant_linear_velocity ?? (item.constant_linear_velocity = create.Vector2(0, 0));
    //physics_material_override  
}
