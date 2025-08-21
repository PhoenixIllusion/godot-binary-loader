import { DefaultContainer } from './Container.default';
export function DefaultSplitContainer(item) {
    DefaultContainer(item);
    item.collapsed ?? (item.collapsed = false);
    item.drag_area_highlight_in_editor ?? (item.drag_area_highlight_in_editor = false);
    item.drag_area_margin_begin ?? (item.drag_area_margin_begin = 0);
    item.drag_area_margin_end ?? (item.drag_area_margin_end = 0);
    item.drag_area_offset ?? (item.drag_area_offset = 0);
    item.dragger_visibility ?? (item.dragger_visibility = 0);
    item.dragging_enabled ?? (item.dragging_enabled = true);
    item.split_offset ?? (item.split_offset = 0);
    item.vertical ?? (item.vertical = false);
    //autohide
    //minimum_grab_thickness
    //separation
    //grabber
    //h_grabber
    //v_grabber
    //split_bar_background  
}
