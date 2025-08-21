import { DefaultRefCounted } from './RefCounted.default.js';
export function DefaultTextParagraph(item) {
    DefaultRefCounted(item);
    item.alignment ?? (item.alignment = 0);
    item.break_flags ?? (item.break_flags = 3);
    item.custom_punctuation ?? (item.custom_punctuation = "");
    item.direction ?? (item.direction = 0);
    item.ellipsis_char ?? (item.ellipsis_char = "…");
    item.justification_flags ?? (item.justification_flags = 163);
    item.max_lines_visible ?? (item.max_lines_visible = -1);
    item.orientation ?? (item.orientation = 0);
    item.preserve_control ?? (item.preserve_control = false);
    item.preserve_invalid ?? (item.preserve_invalid = true);
    item.text_overrun_behavior ?? (item.text_overrun_behavior = 0);
    item.width ?? (item.width = -1.0);
}
