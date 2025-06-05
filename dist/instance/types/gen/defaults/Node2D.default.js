/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultCanvasItem } from './CanvasItem.default';
export function DefaultNode2D(item) {
    DefaultCanvasItem(item);
    //global_position
    //global_rotation
    //global_rotation_degrees
    //global_scale
    //global_skew
    //global_transform
    item.position ?? (item.position = create.Vector2(0, 0));
    item.rotation ?? (item.rotation = 0.0);
    //rotation_degrees
    item.scale ?? (item.scale = create.Vector2(1, 1));
    item.skew ?? (item.skew = 0.0);
    //transform  
}
