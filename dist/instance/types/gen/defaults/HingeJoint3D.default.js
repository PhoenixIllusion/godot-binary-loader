import { DefaultJoint3D } from './Joint3D.default.js';
export function DefaultHingeJoint3D(item) {
    DefaultJoint3D(item);
    item['angular_limit/bias'] ?? (item['angular_limit/bias'] = 0.3);
    item['angular_limit/enable'] ?? (item['angular_limit/enable'] = false);
    item['angular_limit/lower'] ?? (item['angular_limit/lower'] = -1.5708);
    item['angular_limit/relaxation'] ?? (item['angular_limit/relaxation'] = 1.0);
    item['angular_limit/softness'] ?? (item['angular_limit/softness'] = 0.9);
    item['angular_limit/upper'] ?? (item['angular_limit/upper'] = 1.5708);
    item['motor/enable'] ?? (item['motor/enable'] = false);
    item['motor/max_impulse'] ?? (item['motor/max_impulse'] = 1.0);
    item['motor/target_velocity'] ?? (item['motor/target_velocity'] = 1.0);
    item['params/bias'] ?? (item['params/bias'] = 0.3);
}
