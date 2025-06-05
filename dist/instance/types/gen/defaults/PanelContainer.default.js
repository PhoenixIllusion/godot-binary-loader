import { DefaultContainer } from './Container.default';
export function DefaultPanelContainer(item) {
    DefaultContainer(item);
    item.mouse_filter ?? (item.mouse_filter = 0);
}
