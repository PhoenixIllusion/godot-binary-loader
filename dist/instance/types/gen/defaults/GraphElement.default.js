/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultContainer } from './Container.default.js';
export function DefaultGraphElement(item) {
    DefaultContainer(item);
    item.draggable ?? (item.draggable = true);
    item.position_offset ?? (item.position_offset = create.Vector2(0, 0));
    item.resizable ?? (item.resizable = false);
    item.selectable ?? (item.selectable = true);
    item.selected ?? (item.selected = false);
    //resizer  
}
