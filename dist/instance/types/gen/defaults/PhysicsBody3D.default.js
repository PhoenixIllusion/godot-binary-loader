import { DefaultCollisionObject3D } from './CollisionObject3D.default.js';
export function DefaultPhysicsBody3D(item) {
    DefaultCollisionObject3D(item);
    item.axis_lock_angular_x ?? (item.axis_lock_angular_x = false);
    item.axis_lock_angular_y ?? (item.axis_lock_angular_y = false);
    item.axis_lock_angular_z ?? (item.axis_lock_angular_z = false);
    item.axis_lock_linear_x ?? (item.axis_lock_linear_x = false);
    item.axis_lock_linear_y ?? (item.axis_lock_linear_y = false);
    item.axis_lock_linear_z ?? (item.axis_lock_linear_z = false);
}
