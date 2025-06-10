import { is_zero_approx, is_greater_or_equal_approx, is_less_approx, is_greater_approx, CMP_EPSILON, is_less_or_equal_approx } from '../math';
import { AnimationNodeOneShot } from '../types/gen';
import { DefaultAnimationNodeOneShot } from '../types/gen/defaults/AnimationNodeOneShot.default';
import { _pi, FilterAction } from './blend';
import { SyncNode } from './sync';
const ONE_SHOT_REQUEST_NONE = AnimationNodeOneShot.OneShotRequest.ONE_SHOT_REQUEST_NONE;
const ONE_SHOT_REQUEST_FIRE = AnimationNodeOneShot.OneShotRequest.ONE_SHOT_REQUEST_FIRE;
const ONE_SHOT_REQUEST_ABORT = AnimationNodeOneShot.OneShotRequest.ONE_SHOT_REQUEST_ABORT;
const ONE_SHOT_REQUEST_FADE_OUT = AnimationNodeOneShot.OneShotRequest.ONE_SHOT_REQUEST_FADE_OUT;
const MIX_MODE_ADD = AnimationNodeOneShot.MixMode.MIX_MODE_ADD;
export class OneShot extends SyncNode {
    constructor(properties, name) {
        super(properties, name, 'AnimationNodeOneShot');
        this.active = false;
        this.request = 0;
        this.fade_in_remaining = 0;
        this.fade_out_remaining = 0;
        this.time_to_restart = -1;
        this.internal_active = false;
        this.source_names = ['in', 'one_shot'];
        DefaultAnimationNodeOneShot(properties);
        Object.assign(this, properties);
    }
    _process(p_playback_info) {
        const cur_request = this.request;
        const cur_active = this.active;
        let cur_internal_active = this.internal_active;
        const cur_nti = this.get_node_time_info();
        let cur_time_to_restart = this.time_to_restart;
        let cur_fade_in_remaining = this.fade_in_remaining;
        let cur_fade_out_remaining = this.fade_out_remaining;
        const mix = this.mix_mode;
        const auto_restart = this.autorestart;
        const auto_restart_delay = this.autorestart_delay;
        const auto_restart_random_delay = this.autorestart_random_delay;
        const { sync, break_loop_at_end } = this;
        const fade_out = this.fadeout_time;
        const fade_in = this.fadein_time;
        this.request = ONE_SHOT_REQUEST_NONE;
        let is_shooting = true;
        let clear_remaining_fade = false;
        let is_fading_out = cur_active == true && cur_internal_active == false;
        const p_time = p_playback_info.time;
        const p_delta = p_playback_info.delta;
        const abs_delta = Math.abs(p_delta);
        const p_seek = p_playback_info.seeked;
        const p_is_external_seeking = p_playback_info.is_external_seeking;
        if (is_zero_approx(p_time) && p_seek && !p_is_external_seeking) {
            clear_remaining_fade = true; // Reset occurs.
        }
        let do_start = cur_request == ONE_SHOT_REQUEST_FIRE;
        if (cur_request == ONE_SHOT_REQUEST_ABORT) {
            this.internal_active = false;
            this.active = false;
            this.time_to_restart = -1;
            is_shooting = false;
        }
        else if (cur_request == ONE_SHOT_REQUEST_FADE_OUT && !is_fading_out) { // If fading, keep current fade.
            if (cur_active) {
                // Request fading.
                is_fading_out = true;
                cur_fade_out_remaining = fade_out;
                cur_fade_in_remaining = 0;
            }
            else {
                // Shot is ended, do nothing.
                is_shooting = false;
            }
            this.internal_active = false;
            this.time_to_restart = -1;
        }
        else if (!do_start && !cur_active) {
            if (is_greater_or_equal_approx(cur_time_to_restart, 0) && !p_seek) {
                cur_time_to_restart -= abs_delta;
                if (is_less_approx(cur_time_to_restart, 0)) {
                    do_start = true; // Restart.
                }
                this.time_to_restart = cur_time_to_restart;
            }
            if (!do_start) {
                is_shooting = false;
            }
        }
        let os_seek = p_seek;
        if (clear_remaining_fade) {
            os_seek = false;
            cur_fade_out_remaining = 0;
            this.fade_out_remaining = 0;
            if (is_fading_out) {
                is_fading_out = false;
                this.internal_active = false;
                this.active = false;
            }
        }
        if (!is_shooting) {
            const pi = _pi(p_playback_info);
            pi.weight = 1.0;
            return this.blend_input(0, pi, FilterAction.FILTER_IGNORE, sync);
        }
        if (do_start) {
            os_seek = true;
            if (!cur_internal_active) {
                cur_fade_in_remaining = fade_in; // If already active, don't fade-in again.
            }
            cur_internal_active = true;
            this.request = AnimationNodeOneShot.OneShotRequest.ONE_SHOT_REQUEST_NONE;
            this.internal_active = true;
            this.active = true;
        }
        let blend = 1.0;
        let use_blend = sync;
        if (is_greater_approx(cur_fade_in_remaining, 0)) {
            if (is_greater_approx(fade_in, 0)) {
                use_blend = true;
                blend = (fade_in - cur_fade_in_remaining) / fade_in;
                /* TODO CURVE
                if (fade_in_curve.is_valid()) {
                    blend = fade_in_curve->sample(blend);
                } */
            }
            else {
                blend = 0; // Should not happen.
            }
        }
        if (is_fading_out) {
            use_blend = true;
            if (is_greater_approx(fade_out, 0)) {
                blend = cur_fade_out_remaining / fade_out;
                /* TODO CURVE
                if (fade_out_curve.is_valid()) {
                    blend = 1.0 - fade_out_curve->sample(1.0 - blend);
                } */
            }
            else {
                blend = 0;
            }
        }
        let pi = _pi(p_playback_info);
        let main_nti;
        if (mix == MIX_MODE_ADD) {
            pi.weight = 1.0;
            main_nti = this.blend_input(0, pi, FilterAction.FILTER_IGNORE, sync);
        }
        else {
            pi.seeked && (pi.seeked = use_blend);
            pi.weight = 1.0 - blend;
            main_nti = this.blend_input(0, pi, FilterAction.FILTER_BLEND, sync); // Unlike below, processing this edge is a corner case.
        }
        pi = _pi(p_playback_info);
        if (do_start) {
            pi.time = 0;
        }
        else if (os_seek) {
            pi.time = cur_nti.position;
        }
        pi.seeked = os_seek;
        pi.weight = is_zero_approx(blend) ? CMP_EPSILON : blend;
        const os_nti = this.blend_input(1, pi, FilterAction.FILTER_PASS, true); // Blend values must be more than CMP_EPSILON to process discrete keys in edge.
        if (is_less_or_equal_approx(cur_fade_in_remaining, 0) && !do_start && !is_fading_out && is_less_or_equal_approx(os_nti.get_remain(break_loop_at_end), fade_out)) {
            is_fading_out = true;
            cur_fade_out_remaining = os_nti.get_remain(break_loop_at_end);
            cur_fade_in_remaining = 0;
            this.internal_active = false;
        }
        if (!p_seek) {
            if (is_less_or_equal_approx(os_nti.get_remain(break_loop_at_end), 0) || (is_fading_out && is_less_or_equal_approx(cur_fade_out_remaining, 0))) {
                this.internal_active = false;
                this.active = false;
                if (auto_restart) {
                    const restart_sec = auto_restart_delay + Math.random() * auto_restart_random_delay;
                    this.time_to_restart = restart_sec;
                }
            }
            const d = Math.abs(os_nti.delta);
            if (!do_start) {
                cur_fade_in_remaining = Math.max(0, cur_fade_in_remaining - d); // Don't consider seeked delta by restart.
            }
            cur_fade_out_remaining = Math.max(0, cur_fade_out_remaining - d);
        }
        this.fade_in_remaining = cur_fade_in_remaining;
        this.fade_out_remaining = cur_fade_out_remaining;
        return cur_internal_active ? os_nti : main_nti;
    }
}
OneShot.registerType('AnimationNodeOneShot', OneShot);
