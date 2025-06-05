import { DefaultContainer } from './Container.default';
export function DefaultSubViewportContainer(item) {
    DefaultContainer(item);
    item.focus_mode ?? (item.focus_mode = 1);
    item.stretch ?? (item.stretch = false);
    item.stretch_shrink ?? (item.stretch_shrink = 1);
}
