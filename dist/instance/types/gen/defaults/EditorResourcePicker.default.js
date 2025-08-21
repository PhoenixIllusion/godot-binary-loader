import { DefaultHBoxContainer } from './HBoxContainer.default.js';
export function DefaultEditorResourcePicker(item) {
    DefaultHBoxContainer(item);
    item.base_type ?? (item.base_type = "");
    item.editable ?? (item.editable = true);
    //edited_resource
    item.toggle_mode ?? (item.toggle_mode = false);
}
