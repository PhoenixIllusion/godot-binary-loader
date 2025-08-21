import { DefaultCameraAttributes } from './CameraAttributes.default.js';
export function DefaultCameraAttributesPhysical(item) {
    DefaultCameraAttributes(item);
    item.auto_exposure_max_exposure_value ?? (item.auto_exposure_max_exposure_value = 10.0);
    item.auto_exposure_min_exposure_value ?? (item.auto_exposure_min_exposure_value = -8.0);
    item.exposure_aperture ?? (item.exposure_aperture = 16.0);
    item.exposure_shutter_speed ?? (item.exposure_shutter_speed = 100.0);
    item.frustum_far ?? (item.frustum_far = 4000.0);
    item.frustum_focal_length ?? (item.frustum_focal_length = 35.0);
    item.frustum_focus_distance ?? (item.frustum_focus_distance = 10.0);
    item.frustum_near ?? (item.frustum_near = 0.05);
}
