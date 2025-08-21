import { DefaultContainer } from './Container.default.js';
export function DefaultBoxContainer(item) {
    DefaultContainer(item);
    item.alignment ?? (item.alignment = 0);
    item.vertical ?? (item.vertical = false);
    //separation  
}
