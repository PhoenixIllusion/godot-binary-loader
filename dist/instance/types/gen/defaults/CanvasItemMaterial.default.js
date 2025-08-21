import { DefaultMaterial } from './Material.default.js';
export function DefaultCanvasItemMaterial(item) {
    DefaultMaterial(item);
    item.blend_mode ?? (item.blend_mode = 0);
    item.light_mode ?? (item.light_mode = 0);
    //particles_anim_h_frames
    //particles_anim_loop
    //particles_anim_v_frames
    item.particles_animation ?? (item.particles_animation = false);
}
