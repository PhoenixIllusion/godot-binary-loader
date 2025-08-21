/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultButton } from './Button.default.js';
export function DefaultColorPickerButton(item) {
    DefaultButton(item);
    item.color ?? (item.color = create.Color(0, 0, 0, 1));
    item.edit_alpha ?? (item.edit_alpha = true);
    item.toggle_mode ?? (item.toggle_mode = true);
    //bg  
}
