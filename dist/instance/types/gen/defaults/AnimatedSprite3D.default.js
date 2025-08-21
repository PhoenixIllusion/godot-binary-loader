import { DefaultSpriteBase3D } from './SpriteBase3D.default.js';
export function DefaultAnimatedSprite3D(item) {
    DefaultSpriteBase3D(item);
    item.animation ?? (item.animation = "default");
    item.autoplay ?? (item.autoplay = "");
    item.frame ?? (item.frame = 0);
    item.frame_progress ?? (item.frame_progress = 0.0);
    item.speed_scale ?? (item.speed_scale = 1.0);
    //sprite_frames  
}
