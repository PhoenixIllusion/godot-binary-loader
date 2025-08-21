import { DefaultJoint2D } from './Joint2D.default.js';
export function DefaultPinJoint2D(item) {
    DefaultJoint2D(item);
    item.angular_limit_enabled ?? (item.angular_limit_enabled = false);
    item.angular_limit_lower ?? (item.angular_limit_lower = 0.0);
    item.angular_limit_upper ?? (item.angular_limit_upper = 0.0);
    item.motor_enabled ?? (item.motor_enabled = false);
    item.motor_target_velocity ?? (item.motor_target_velocity = 0.0);
    item.softness ?? (item.softness = 0.0);
}
