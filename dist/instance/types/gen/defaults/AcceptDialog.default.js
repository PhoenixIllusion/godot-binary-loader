import { DefaultWindow } from './Window.default.js';
export function DefaultAcceptDialog(item) {
    DefaultWindow(item);
    item.dialog_autowrap ?? (item.dialog_autowrap = false);
    item.dialog_close_on_escape ?? (item.dialog_close_on_escape = true);
    item.dialog_hide_on_ok ?? (item.dialog_hide_on_ok = true);
    item.dialog_text ?? (item.dialog_text = "");
    item.exclusive ?? (item.exclusive = true);
    item.keep_title_visible ?? (item.keep_title_visible = true);
    item.ok_button_text ?? (item.ok_button_text = "OK");
    item.title ?? (item.title = "Alert!");
    item.transient ?? (item.transient = true);
    item.visible ?? (item.visible = false);
    item.wrap_controls ?? (item.wrap_controls = true);
    //buttons_min_height
    //buttons_min_width
    //buttons_separation
    //panel  
}
