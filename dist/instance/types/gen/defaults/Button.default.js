import { DefaultBaseButton } from './BaseButton.default';
export function DefaultButton(item) {
    DefaultBaseButton(item);
    item.alignment ?? (item.alignment = 1);
    item.autowrap_mode ?? (item.autowrap_mode = 0);
    item.clip_text ?? (item.clip_text = false);
    item.expand_icon ?? (item.expand_icon = false);
    item.flat ?? (item.flat = false);
    //icon
    item.icon_alignment ?? (item.icon_alignment = 0);
    item.language ?? (item.language = "");
    item.text ?? (item.text = "");
    item.text_direction ?? (item.text_direction = 0);
    item.text_overrun_behavior ?? (item.text_overrun_behavior = 0);
    item.vertical_icon_alignment ?? (item.vertical_icon_alignment = 1);
}
