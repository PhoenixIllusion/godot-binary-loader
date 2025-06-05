import { DefaultTexture2D } from './Texture2D.default';
export function DefaultAnimatedTexture(item) {
    DefaultTexture2D(item);
    //current_frame
    item.frames ?? (item.frames = 1);
    item.one_shot ?? (item.one_shot = false);
    item.pause ?? (item.pause = false);
    item.resource_local_to_scene ?? (item.resource_local_to_scene = false);
    item.speed_scale ?? (item.speed_scale = 1.0);
}
