import { DefaultRefCounted } from './RefCounted.default';
export function DefaultTextLine(item) {
    DefaultRefCounted(item);
    item.alignment ?? (item.alignment = 0);
    item.direction ?? (item.direction = 0);
    item.ellipsis_char ?? (item.ellipsis_char = "…");
    item.flags ?? (item.flags = 3);
    item.orientation ?? (item.orientation = 0);
    item.preserve_control ?? (item.preserve_control = false);
    item.preserve_invalid ?? (item.preserve_invalid = true);
    item.text_overrun_behavior ?? (item.text_overrun_behavior = 3);
    item.width ?? (item.width = -1.0);
}
