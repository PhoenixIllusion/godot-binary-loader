import { DefaultRigidBody3D } from './RigidBody3D.default.js';
export function DefaultVehicleBody3D(item) {
    DefaultRigidBody3D(item);
    item.brake ?? (item.brake = 0.0);
    item.engine_force ?? (item.engine_force = 0.0);
    item.mass ?? (item.mass = 40.0);
    item.steering ?? (item.steering = 0.0);
}
