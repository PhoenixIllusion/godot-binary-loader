import { DefaultAnimationNodeSync } from './AnimationNodeSync.default';
export function DefaultAnimationNodeOneShot(item) {
    DefaultAnimationNodeSync(item);
    item.autorestart ?? (item.autorestart = false);
    item.autorestart_delay ?? (item.autorestart_delay = 1.0);
    item.autorestart_random_delay ?? (item.autorestart_random_delay = 0.0);
    item.break_loop_at_end ?? (item.break_loop_at_end = false);
    //fadein_curve
    item.fadein_time ?? (item.fadein_time = 0.0);
    //fadeout_curve
    item.fadeout_time ?? (item.fadeout_time = 0.0);
    item.mix_mode ?? (item.mix_mode = 0);
}
