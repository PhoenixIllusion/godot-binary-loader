import { DefaultJoint2D } from './Joint2D.default.js';
export function DefaultGrooveJoint2D(item) {
    DefaultJoint2D(item);
    item.initial_offset ?? (item.initial_offset = 25.0);
    item.length ?? (item.length = 50.0);
}
