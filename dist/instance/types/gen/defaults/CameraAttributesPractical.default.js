import { DefaultCameraAttributes } from './CameraAttributes.default';
export function DefaultCameraAttributesPractical(item) {
    DefaultCameraAttributes(item);
    item.auto_exposure_max_sensitivity ?? (item.auto_exposure_max_sensitivity = 800.0);
    item.auto_exposure_min_sensitivity ?? (item.auto_exposure_min_sensitivity = 0.0);
    item.dof_blur_amount ?? (item.dof_blur_amount = 0.1);
    item.dof_blur_far_distance ?? (item.dof_blur_far_distance = 10.0);
    item.dof_blur_far_enabled ?? (item.dof_blur_far_enabled = false);
    item.dof_blur_far_transition ?? (item.dof_blur_far_transition = 5.0);
    item.dof_blur_near_distance ?? (item.dof_blur_near_distance = 2.0);
    item.dof_blur_near_enabled ?? (item.dof_blur_near_enabled = false);
    item.dof_blur_near_transition ?? (item.dof_blur_near_transition = 1.0);
}
