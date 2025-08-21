/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultRefCounted } from './RefCounted.default.js';
export function DefaultCameraFeed(item) {
    DefaultRefCounted(item);
    item.feed_is_active ?? (item.feed_is_active = false);
    item.feed_transform ?? (item.feed_transform = create.Transform2D(1, 0, 0, -1, 0, 1));
    item.formats ?? (item.formats = []);
}
