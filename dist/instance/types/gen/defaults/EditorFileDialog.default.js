/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultConfirmationDialog } from './ConfirmationDialog.default.js';
export function DefaultEditorFileDialog(item) {
    DefaultConfirmationDialog(item);
    item.access ?? (item.access = 0);
    //current_dir
    //current_file
    //current_path
    item.dialog_hide_on_ok ?? (item.dialog_hide_on_ok = false);
    item.disable_overwrite_warning ?? (item.disable_overwrite_warning = false);
    item.display_mode ?? (item.display_mode = 0);
    item.file_mode ?? (item.file_mode = 4);
    item.filters ?? (item.filters = create.PackedStringArray());
    item.option_count ?? (item.option_count = 0);
    item.show_hidden_files ?? (item.show_hidden_files = false);
    item.title ?? (item.title = "Save a File");
}
