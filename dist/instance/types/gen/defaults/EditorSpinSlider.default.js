import { DefaultRange } from './Range.default';
export function DefaultEditorSpinSlider(item) {
    DefaultRange(item);
    item.flat ?? (item.flat = false);
    item.focus_mode ?? (item.focus_mode = 2);
    item.hide_slider ?? (item.hide_slider = false);
    item.label ?? (item.label = "");
    item.read_only ?? (item.read_only = false);
    item.size_flags_vertical ?? (item.size_flags_vertical = 1);
    item.step ?? (item.step = 1.0);
    item.suffix ?? (item.suffix = "");
    //updown
    //updown_disabled  
}
