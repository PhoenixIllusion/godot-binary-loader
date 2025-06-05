import { DefaultObject } from './Object.default';
export function DefaultNode(item) {
    DefaultObject(item);
    item.auto_translate_mode ?? (item.auto_translate_mode = 0);
    item.editor_description ?? (item.editor_description = "");
    //multiplayer
    //name
    //owner
    item.physics_interpolation_mode ?? (item.physics_interpolation_mode = 0);
    item.process_mode ?? (item.process_mode = 0);
    item.process_physics_priority ?? (item.process_physics_priority = 0);
    item.process_priority ?? (item.process_priority = 0);
    item.process_thread_group ?? (item.process_thread_group = 0);
    //process_thread_group_order
    //process_thread_messages
    //scene_file_path
    item.unique_name_in_owner ?? (item.unique_name_in_owner = false);
}
