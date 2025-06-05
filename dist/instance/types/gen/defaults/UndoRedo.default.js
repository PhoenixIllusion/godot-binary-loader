import { DefaultObject } from './Object.default';
export function DefaultUndoRedo(item) {
    DefaultObject(item);
    item.max_steps ?? (item.max_steps = 0);
}
