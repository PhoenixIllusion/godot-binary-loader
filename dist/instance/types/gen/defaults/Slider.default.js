import { DefaultRange } from './Range.default';
export function DefaultSlider(item) {
    DefaultRange(item);
    item.editable ?? (item.editable = true);
    item.focus_mode ?? (item.focus_mode = 2);
    item.scrollable ?? (item.scrollable = true);
    item.step ?? (item.step = 1.0);
    item.tick_count ?? (item.tick_count = 0);
    item.ticks_on_borders ?? (item.ticks_on_borders = false);
    //center_grabber
    //grabber_offset
    //grabber
    //grabber_disabled
    //grabber_highlight
    //tick
    //grabber_area
    //grabber_area_highlight
    //slider  
}
