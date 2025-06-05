import { DefaultWindow } from './Window.default';
export function DefaultPopup(item) {
    DefaultWindow(item);
    item.borderless ?? (item.borderless = true);
    item.popup_window ?? (item.popup_window = true);
    item.transient ?? (item.transient = true);
    item.unresizable ?? (item.unresizable = true);
    item.visible ?? (item.visible = false);
    item.wrap_controls ?? (item.wrap_controls = true);
}
