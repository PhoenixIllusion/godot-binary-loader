import { DefaultRange } from './Range.default';
export function DefaultScrollBar(item) {
    DefaultRange(item);
    item.custom_step ?? (item.custom_step = -1.0);
    item.step ?? (item.step = 0.0);
}
