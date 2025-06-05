import { DefaultControl } from './Control.default';
export function DefaultTextureRect(item) {
    DefaultControl(item);
    item.expand_mode ?? (item.expand_mode = 0);
    item.flip_h ?? (item.flip_h = false);
    item.flip_v ?? (item.flip_v = false);
    item.mouse_filter ?? (item.mouse_filter = 1);
    item.stretch_mode ?? (item.stretch_mode = 0);
    //texture  
}
