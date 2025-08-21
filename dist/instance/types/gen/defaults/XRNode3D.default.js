import { DefaultNode3D } from './Node3D.default.js';
export function DefaultXRNode3D(item) {
    DefaultNode3D(item);
    item.pose ?? (item.pose = "default");
    item.show_when_tracked ?? (item.show_when_tracked = false);
    item.tracker ?? (item.tracker = "");
}
