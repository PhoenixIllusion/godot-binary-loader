import { DefaultContainer } from './Container.default';
export function DefaultGridContainer(item) {
    DefaultContainer(item);
    item.columns ?? (item.columns = 1);
}
