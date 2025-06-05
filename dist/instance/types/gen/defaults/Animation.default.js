import { DefaultResource } from './Resource.default';
export function DefaultAnimation(item) {
    DefaultResource(item);
    item.capture_included ?? (item.capture_included = false);
    item.length ?? (item.length = 1.0);
    item.loop_mode ?? (item.loop_mode = 0);
    item.step ?? (item.step = 0.0333333);
}
