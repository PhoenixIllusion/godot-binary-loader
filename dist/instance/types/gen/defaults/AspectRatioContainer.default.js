import { DefaultContainer } from './Container.default.js';
export function DefaultAspectRatioContainer(item) {
    DefaultContainer(item);
    item.alignment_horizontal ?? (item.alignment_horizontal = 1);
    item.alignment_vertical ?? (item.alignment_vertical = 1);
    item.ratio ?? (item.ratio = 1.0);
    item.stretch_mode ?? (item.stretch_mode = 2);
}
