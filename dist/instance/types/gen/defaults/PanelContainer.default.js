import { DefaultContainer } from './Container.default.js';
export function DefaultPanelContainer(item) {
    DefaultContainer(item);
    item.mouse_filter ?? (item.mouse_filter = 0);
    //panel  
}
