import { DefaultPopup } from './Popup.default';
export function DefaultPopupMenu(item) {
    DefaultPopup(item);
    item.allow_search ?? (item.allow_search = true);
    item.hide_on_checkable_item_selection ?? (item.hide_on_checkable_item_selection = true);
    item.hide_on_item_selection ?? (item.hide_on_item_selection = true);
    item.hide_on_state_item_selection ?? (item.hide_on_state_item_selection = false);
    item.item_count ?? (item.item_count = 0);
    item.prefer_native_menu ?? (item.prefer_native_menu = false);
    item.submenu_popup_delay ?? (item.submenu_popup_delay = 0.3);
    item.system_menu_id ?? (item.system_menu_id = 0);
}
