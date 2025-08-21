import { DefaultGraphElement } from './GraphElement.default';
export function DefaultGraphNode(item) {
    DefaultGraphElement(item);
    item.ignore_invalid_connection_type ?? (item.ignore_invalid_connection_type = false);
    item.mouse_filter ?? (item.mouse_filter = 0);
    item.title ?? (item.title = "");
    //resizer_color
    //port_h_offset
    //separation
    //port
    //panel
    //panel_selected
    //slot
    //titlebar
    //titlebar_selected  
}
