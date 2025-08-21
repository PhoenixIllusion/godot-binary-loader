import { DefaultButton } from './Button.default';
export function DefaultCheckButton(item) {
    DefaultButton(item);
    item.alignment ?? (item.alignment = 0);
    item.toggle_mode ?? (item.toggle_mode = true);
    //check_v_offset
    //checked
    //checked_disabled
    //checked_disabled_mirrored
    //checked_mirrored
    //unchecked
    //unchecked_disabled
    //unchecked_disabled_mirrored
    //unchecked_mirrored  
}
