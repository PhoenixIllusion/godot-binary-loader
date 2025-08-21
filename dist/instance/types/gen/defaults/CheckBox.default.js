import { DefaultButton } from './Button.default';
export function DefaultCheckBox(item) {
    DefaultButton(item);
    item.alignment ?? (item.alignment = 0);
    item.toggle_mode ?? (item.toggle_mode = true);
    //check_v_offset
    //checked
    //checked_disabled
    //radio_checked
    //radio_checked_disabled
    //radio_unchecked
    //radio_unchecked_disabled
    //unchecked
    //unchecked_disabled  
}
