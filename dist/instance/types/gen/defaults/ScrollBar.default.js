import { DefaultRange } from './Range.default.js';
export function DefaultScrollBar(item) {
    DefaultRange(item);
    item.custom_step ?? (item.custom_step = -1.0);
    item.step ?? (item.step = 0.0);
    //decrement
    //decrement_highlight
    //decrement_pressed
    //increment
    //increment_highlight
    //increment_pressed
    //grabber
    //grabber_highlight
    //grabber_pressed
    //scroll
    //scroll_focus  
}
