/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultRefCounted } from './RefCounted.default';
export function DefaultXRPose(item) {
    DefaultRefCounted(item);
    item.angular_velocity ?? (item.angular_velocity = create.Vector3(0, 0, 0));
    item.has_tracking_data ?? (item.has_tracking_data = false);
    item.linear_velocity ?? (item.linear_velocity = create.Vector3(0, 0, 0));
    item.name ?? (item.name = "");
    item.tracking_confidence ?? (item.tracking_confidence = 0);
    item.transform ?? (item.transform = create.Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0));
}
