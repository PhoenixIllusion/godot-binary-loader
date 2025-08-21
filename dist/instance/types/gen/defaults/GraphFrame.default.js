/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultGraphElement } from './GraphElement.default';
export function DefaultGraphFrame(item) {
    DefaultGraphElement(item);
    item.autoshrink_enabled ?? (item.autoshrink_enabled = true);
    item.autoshrink_margin ?? (item.autoshrink_margin = 40);
    item.drag_margin ?? (item.drag_margin = 16);
    item.mouse_filter ?? (item.mouse_filter = 0);
    item.tint_color ?? (item.tint_color = create.Color(0.3, 0.3, 0.3, 0.75));
    item.tint_color_enabled ?? (item.tint_color_enabled = false);
    item.title ?? (item.title = "");
    //resizer_color
    //panel
    //panel_selected
    //titlebar
    //titlebar_selected  
}
