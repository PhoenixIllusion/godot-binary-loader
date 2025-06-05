import { DefaultContainer } from './Container.default';
export function DefaultCenterContainer(item) {
    DefaultContainer(item);
    item.use_top_left ?? (item.use_top_left = false);
}
