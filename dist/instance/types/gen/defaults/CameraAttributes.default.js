import { DefaultResource } from './Resource.default.js';
export function DefaultCameraAttributes(item) {
    DefaultResource(item);
    item.auto_exposure_enabled ?? (item.auto_exposure_enabled = false);
    item.auto_exposure_scale ?? (item.auto_exposure_scale = 0.4);
    item.auto_exposure_speed ?? (item.auto_exposure_speed = 0.5);
    item.exposure_multiplier ?? (item.exposure_multiplier = 1.0);
    item.exposure_sensitivity ?? (item.exposure_sensitivity = 100.0);
}
