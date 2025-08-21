import { DefaultBaseButton } from './BaseButton.default.js';
export function DefaultTextureButton(item) {
    DefaultBaseButton(item);
    item.flip_h ?? (item.flip_h = false);
    item.flip_v ?? (item.flip_v = false);
    item.ignore_texture_size ?? (item.ignore_texture_size = false);
    item.stretch_mode ?? (item.stretch_mode = 2);
    //texture_click_mask
    //texture_disabled
    //texture_focused
    //texture_hover
    //texture_normal
    //texture_pressed  
}
