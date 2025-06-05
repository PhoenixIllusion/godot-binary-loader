/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultRefCounted } from './RefCounted.default';
export function DefaultNavigationPathQueryResult3D(item) {
    DefaultRefCounted(item);
    item.path ?? (item.path = create.PackedVector3Array());
    item.path_owner_ids ?? (item.path_owner_ids = create.PackedInt64Array());
    item.path_rids ?? (item.path_rids = []);
    item.path_types ?? (item.path_types = create.PackedInt32Array());
}
