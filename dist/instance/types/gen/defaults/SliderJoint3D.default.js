import { DefaultJoint3D } from './Joint3D.default.js';
export function DefaultSliderJoint3D(item) {
    DefaultJoint3D(item);
    item['angular_limit/damping'] ?? (item['angular_limit/damping'] = 0.0);
    item['angular_limit/lower_angle'] ?? (item['angular_limit/lower_angle'] = 0.0);
    item['angular_limit/restitution'] ?? (item['angular_limit/restitution'] = 0.7);
    item['angular_limit/softness'] ?? (item['angular_limit/softness'] = 1.0);
    item['angular_limit/upper_angle'] ?? (item['angular_limit/upper_angle'] = 0.0);
    item['angular_motion/damping'] ?? (item['angular_motion/damping'] = 1.0);
    item['angular_motion/restitution'] ?? (item['angular_motion/restitution'] = 0.7);
    item['angular_motion/softness'] ?? (item['angular_motion/softness'] = 1.0);
    item['angular_ortho/damping'] ?? (item['angular_ortho/damping'] = 1.0);
    item['angular_ortho/restitution'] ?? (item['angular_ortho/restitution'] = 0.7);
    item['angular_ortho/softness'] ?? (item['angular_ortho/softness'] = 1.0);
    item['linear_limit/damping'] ?? (item['linear_limit/damping'] = 1.0);
    item['linear_limit/lower_distance'] ?? (item['linear_limit/lower_distance'] = -1.0);
    item['linear_limit/restitution'] ?? (item['linear_limit/restitution'] = 0.7);
    item['linear_limit/softness'] ?? (item['linear_limit/softness'] = 1.0);
    item['linear_limit/upper_distance'] ?? (item['linear_limit/upper_distance'] = 1.0);
    item['linear_motion/damping'] ?? (item['linear_motion/damping'] = 0.0);
    item['linear_motion/restitution'] ?? (item['linear_motion/restitution'] = 0.7);
    item['linear_motion/softness'] ?? (item['linear_motion/softness'] = 1.0);
    item['linear_ortho/damping'] ?? (item['linear_ortho/damping'] = 1.0);
    item['linear_ortho/restitution'] ?? (item['linear_ortho/restitution'] = 0.7);
    item['linear_ortho/softness'] ?? (item['linear_ortho/softness'] = 1.0);
}
