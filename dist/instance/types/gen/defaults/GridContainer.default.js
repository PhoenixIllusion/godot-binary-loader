import { DefaultContainer } from './Container.default.js';
export function DefaultGridContainer(item) {
    DefaultContainer(item);
    item.columns ?? (item.columns = 1);
    //h_separation
    //v_separation  
}
