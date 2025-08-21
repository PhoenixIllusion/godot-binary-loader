import { DefaultJoint2D } from './Joint2D.default.js';
export function DefaultDampedSpringJoint2D(item) {
    DefaultJoint2D(item);
    item.damping ?? (item.damping = 1.0);
    item.length ?? (item.length = 50.0);
    item.rest_length ?? (item.rest_length = 0.0);
    item.stiffness ?? (item.stiffness = 20.0);
}
