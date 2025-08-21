import { DefaultNode } from './Node.default.js';
export function DefaultTimer(item) {
    DefaultNode(item);
    item.autostart ?? (item.autostart = false);
    item.one_shot ?? (item.one_shot = false);
    //paused
    item.process_callback ?? (item.process_callback = 1);
    //time_left
    item.wait_time ?? (item.wait_time = 1.0);
}
