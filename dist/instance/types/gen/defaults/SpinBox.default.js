import { DefaultRange } from './Range.default';
export function DefaultSpinBox(item) {
    DefaultRange(item);
    item.alignment ?? (item.alignment = 0);
    item.custom_arrow_step ?? (item.custom_arrow_step = 0.0);
    item.editable ?? (item.editable = true);
    item.prefix ?? (item.prefix = "");
    item.select_all_on_focus ?? (item.select_all_on_focus = false);
    item.size_flags_vertical ?? (item.size_flags_vertical = 1);
    item.step ?? (item.step = 1.0);
    item.suffix ?? (item.suffix = "");
    item.update_on_text_changed ?? (item.update_on_text_changed = false);
}
