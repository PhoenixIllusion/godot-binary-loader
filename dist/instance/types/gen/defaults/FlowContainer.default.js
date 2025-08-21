import { DefaultContainer } from './Container.default';
export function DefaultFlowContainer(item) {
    DefaultContainer(item);
    item.alignment ?? (item.alignment = 0);
    item.last_wrap_alignment ?? (item.last_wrap_alignment = 0);
    item.reverse_fill ?? (item.reverse_fill = false);
    item.vertical ?? (item.vertical = false);
    //h_separation
    //v_separation  
}
