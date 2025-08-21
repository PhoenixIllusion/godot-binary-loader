import { DefaultLight3D } from './Light3D.default.js';
export function DefaultSpotLight3D(item) {
    DefaultLight3D(item);
    item.shadow_bias ?? (item.shadow_bias = 0.03);
    item.shadow_normal_bias ?? (item.shadow_normal_bias = 1.0);
    item.spot_angle ?? (item.spot_angle = 45.0);
    item.spot_angle_attenuation ?? (item.spot_angle_attenuation = 1.0);
    item.spot_attenuation ?? (item.spot_attenuation = 1.0);
    item.spot_range ?? (item.spot_range = 5.0);
}
