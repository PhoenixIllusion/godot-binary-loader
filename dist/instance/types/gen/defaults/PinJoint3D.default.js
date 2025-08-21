import { DefaultJoint3D } from './Joint3D.default.js';
export function DefaultPinJoint3D(item) {
    DefaultJoint3D(item);
    item['params/bias'] ?? (item['params/bias'] = 0.3);
    item['params/damping'] ?? (item['params/damping'] = 1.0);
    item['params/impulse_clamp'] ?? (item['params/impulse_clamp'] = 0.0);
}
