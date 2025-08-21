import { DefaultControl } from './Control.default.js';
export function DefaultRange(item) {
    DefaultControl(item);
    item.allow_greater ?? (item.allow_greater = false);
    item.allow_lesser ?? (item.allow_lesser = false);
    item.exp_edit ?? (item.exp_edit = false);
    item.max_value ?? (item.max_value = 100.0);
    item.min_value ?? (item.min_value = 0.0);
    item.page ?? (item.page = 0.0);
    //ratio
    item.rounded ?? (item.rounded = false);
    item.size_flags_vertical ?? (item.size_flags_vertical = 0);
    item.step ?? (item.step = 0.01);
    item.value ?? (item.value = 0.0);
}
