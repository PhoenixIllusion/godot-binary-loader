import { DefaultResource } from './Resource.default.js';
export function DefaultAnimationNodeStateMachineTransition(item) {
    DefaultResource(item);
    item.advance_condition ?? (item.advance_condition = "");
    item.advance_expression ?? (item.advance_expression = "");
    item.advance_mode ?? (item.advance_mode = 1);
    item.break_loop_at_end ?? (item.break_loop_at_end = false);
    item.priority ?? (item.priority = 1);
    item.reset ?? (item.reset = true);
    item.switch_mode ?? (item.switch_mode = 0);
    //xfade_curve
    item.xfade_time ?? (item.xfade_time = 0.0);
}
