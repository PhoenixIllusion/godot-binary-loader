import { DefaultLight3D } from './Light3D.default';
export function DefaultOmniLight3D(item) {
    DefaultLight3D(item);
    item.omni_attenuation ?? (item.omni_attenuation = 1.0);
    item.omni_range ?? (item.omni_range = 5.0);
    item.omni_shadow_mode ?? (item.omni_shadow_mode = 1);
    item.shadow_normal_bias ?? (item.shadow_normal_bias = 1.0);
}
