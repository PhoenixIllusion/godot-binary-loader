import { DefaultNode3D } from './Node3D.default.js';
export function DefaultVehicleWheel3D(item) {
    DefaultNode3D(item);
    item.brake ?? (item.brake = 0.0);
    item.damping_compression ?? (item.damping_compression = 0.83);
    item.damping_relaxation ?? (item.damping_relaxation = 0.88);
    item.engine_force ?? (item.engine_force = 0.0);
    item.steering ?? (item.steering = 0.0);
    item.suspension_max_force ?? (item.suspension_max_force = 6000.0);
    item.suspension_stiffness ?? (item.suspension_stiffness = 5.88);
    item.suspension_travel ?? (item.suspension_travel = 0.2);
    item.use_as_steering ?? (item.use_as_steering = false);
    item.use_as_traction ?? (item.use_as_traction = false);
    item.wheel_friction_slip ?? (item.wheel_friction_slip = 10.5);
    item.wheel_radius ?? (item.wheel_radius = 0.5);
    item.wheel_rest_length ?? (item.wheel_rest_length = 0.15);
    item.wheel_roll_influence ?? (item.wheel_roll_influence = 0.1);
}
