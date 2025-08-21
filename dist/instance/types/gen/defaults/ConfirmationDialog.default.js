/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultAcceptDialog } from './AcceptDialog.default.js';
export function DefaultConfirmationDialog(item) {
    DefaultAcceptDialog(item);
    item.cancel_button_text ?? (item.cancel_button_text = "Cancel");
    item.min_size ?? (item.min_size = create.Vector2i(200, 70));
    item.size ?? (item.size = create.Vector2i(200, 100));
    item.title ?? (item.title = "Please Confirm...");
}
