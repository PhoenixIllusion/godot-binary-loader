import { DefaultObject } from './Object.default';
export function DefaultEngine(item) {
    DefaultObject(item);
    item.max_fps ?? (item.max_fps = 0);
    item.max_physics_steps_per_frame ?? (item.max_physics_steps_per_frame = 8);
    item.physics_jitter_fix ?? (item.physics_jitter_fix = 0.5);
    item.physics_ticks_per_second ?? (item.physics_ticks_per_second = 60);
    item.print_error_messages ?? (item.print_error_messages = true);
    item.print_to_stdout ?? (item.print_to_stdout = true);
    item.time_scale ?? (item.time_scale = 1.0);
}
