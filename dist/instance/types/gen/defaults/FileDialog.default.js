/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultConfirmationDialog } from './ConfirmationDialog.default';
export function DefaultFileDialog(item) {
    DefaultConfirmationDialog(item);
    item.access ?? (item.access = 0);
    //current_dir
    //current_file
    //current_path
    item.dialog_hide_on_ok ?? (item.dialog_hide_on_ok = false);
    item.file_mode ?? (item.file_mode = 4);
    item.filename_filter ?? (item.filename_filter = "");
    item.filters ?? (item.filters = create.PackedStringArray());
    item.mode_overrides_title ?? (item.mode_overrides_title = true);
    item.option_count ?? (item.option_count = 0);
    item.root_subfolder ?? (item.root_subfolder = "");
    item.show_hidden_files ?? (item.show_hidden_files = false);
    item.size ?? (item.size = create.Vector2i(640, 360));
    item.title ?? (item.title = "Save a File");
    item.use_native_dialog ?? (item.use_native_dialog = false);
    //file_disabled_color
    //file_icon_color
    //folder_icon_color
    //back_folder
    //create_folder
    //file
    //folder
    //forward_folder
    //parent_folder
    //reload
    //toggle_filename_filter
    //toggle_hidden  
}
