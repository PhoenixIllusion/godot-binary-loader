import { DefaultNode3D } from './Node3D.default';
export function DefaultCollisionShape3D(item) {
    DefaultNode3D(item);
    item.disabled ?? (item.disabled = false);
    //shape  
}
