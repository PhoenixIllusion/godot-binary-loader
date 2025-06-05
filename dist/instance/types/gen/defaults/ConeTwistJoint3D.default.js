import { DefaultJoint3D } from './Joint3D.default';
export function DefaultConeTwistJoint3D(item) {
    DefaultJoint3D(item);
    item.bias ?? (item.bias = 0.3);
    item.relaxation ?? (item.relaxation = 1.0);
    item.softness ?? (item.softness = 0.8);
    item.swing_span ?? (item.swing_span = 0.785398);
    item.twist_span ?? (item.twist_span = 3.14159);
}
