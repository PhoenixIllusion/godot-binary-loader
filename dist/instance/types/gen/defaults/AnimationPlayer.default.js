import { DefaultAnimationMixer } from './AnimationMixer.default';
export function DefaultAnimationPlayer(item) {
    DefaultAnimationMixer(item);
    //assigned_animation
    item.autoplay ?? (item.autoplay = "");
    item.current_animation ?? (item.current_animation = "");
    //current_animation_length
    //current_animation_position
    item.movie_quit_on_finish ?? (item.movie_quit_on_finish = false);
    item.playback_auto_capture ?? (item.playback_auto_capture = true);
    item.playback_auto_capture_duration ?? (item.playback_auto_capture_duration = -1.0);
    item.playback_auto_capture_ease_type ?? (item.playback_auto_capture_ease_type = 0);
    item.playback_auto_capture_transition_type ?? (item.playback_auto_capture_transition_type = 0);
    item.playback_default_blend_time ?? (item.playback_default_blend_time = 0.0);
    item.speed_scale ?? (item.speed_scale = 1.0);
}
