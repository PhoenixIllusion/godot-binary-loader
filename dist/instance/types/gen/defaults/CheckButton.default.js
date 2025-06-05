import { DefaultButton } from './Button.default';
export function DefaultCheckButton(item) {
    DefaultButton(item);
    item.alignment ?? (item.alignment = 0);
    item.toggle_mode ?? (item.toggle_mode = true);
}
