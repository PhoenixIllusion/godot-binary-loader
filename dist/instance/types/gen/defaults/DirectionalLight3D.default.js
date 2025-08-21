import { DefaultLight3D } from './Light3D.default.js';
export function DefaultDirectionalLight3D(item) {
    DefaultLight3D(item);
    item.directional_shadow_blend_splits ?? (item.directional_shadow_blend_splits = false);
    item.directional_shadow_fade_start ?? (item.directional_shadow_fade_start = 0.8);
    item.directional_shadow_max_distance ?? (item.directional_shadow_max_distance = 100.0);
    item.directional_shadow_mode ?? (item.directional_shadow_mode = 2);
    item.directional_shadow_pancake_size ?? (item.directional_shadow_pancake_size = 20.0);
    item.directional_shadow_split_1 ?? (item.directional_shadow_split_1 = 0.1);
    item.directional_shadow_split_2 ?? (item.directional_shadow_split_2 = 0.2);
    item.directional_shadow_split_3 ?? (item.directional_shadow_split_3 = 0.5);
    item.sky_mode ?? (item.sky_mode = 0);
}
