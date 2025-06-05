import { DefaultButton } from './Button.default';
export function DefaultOptionButton(item) {
    DefaultButton(item);
    item.action_mode ?? (item.action_mode = 0);
    item.alignment ?? (item.alignment = 0);
    item.allow_reselect ?? (item.allow_reselect = false);
    item.fit_to_longest_item ?? (item.fit_to_longest_item = true);
    item.item_count ?? (item.item_count = 0);
    item.selected ?? (item.selected = -1);
    item.toggle_mode ?? (item.toggle_mode = true);
}
