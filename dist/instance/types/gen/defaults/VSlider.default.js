import { DefaultSlider } from './Slider.default';
export function DefaultVSlider(item) {
    DefaultSlider(item);
    item.size_flags_horizontal ?? (item.size_flags_horizontal = 0);
    item.size_flags_vertical ?? (item.size_flags_vertical = 1);
}
