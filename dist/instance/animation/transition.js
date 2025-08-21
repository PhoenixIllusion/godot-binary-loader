import { NodeTimeInfo, _pi, FilterAction } from "./blend.js";
import { CMP_EPSILON, is_less_or_equal_approx, is_zero_approx } from '../math.js';
import { unwrap_property_paths } from '@phoenixillusion/godot-scene-reader/process/scene/unwrap.js';
import { ERR_PRINT } from '@phoenixillusion/godot-scene-reader/util/data-reader.js';
import { DefaultAnimationNodeTransition } from '../types/gen/defaults/AnimationNodeTransition.default.js';
import { SyncNode } from './sync.js';
export class Transition extends SyncNode {
    constructor(properties, name) {
        super(properties, name, 'AnimationNodeTransition');
        this.input_data = [];
        this.input_index = {};
        this.current_state = '';
        this.prev_index = -1;
        this.current_index = -1;
        this.prev_xfading = 0;
        this.xfade_time_remaining = 0;
        this.transition_request = '';
        this.pending_update = false;
        const transitionProperties = unwrap_property_paths(properties);
        this.source_names = [];
        for (const [key, val] of Object.entries(transitionProperties)) {
            if (key.startsWith('input_')) {
                const input = val;
                this.input_index[input.name] = this.input_data.length;
                this.input_data.push(input);
                delete transitionProperties[key];
                this.source_names.push(input.name);
            }
        }
        DefaultAnimationNodeTransition(transitionProperties);
        Object.assign(this, transitionProperties);
    }
    _process(p_playback_info) {
        const get_input_count = () => {
            return this.input_data.length;
        };
        const get_input_name = (idx) => {
            return this.input_data[idx].name;
        };
        const find_input = (str) => this.input_index[str];
        let cur_transition_request = this.transition_request;
        let cur_current_index = this.current_index;
        let cur_prev_index = this.prev_index;
        let cur_nti = this.get_node_time_info();
        let cur_prev_xfading = this.prev_xfading;
        let switched = false;
        let restart = false;
        let clear_remaining_fade = false;
        if (this.pending_update) {
            if (cur_current_index < 0 || cur_current_index >= get_input_count()) {
                this.prev_index = -1;
                if (get_input_count() > 0) {
                    this.current_index = 0;
                    this.current_state = get_input_name(0);
                }
                else {
                    this.current_index = -1;
                    this.current_state = '';
                }
            }
            else {
                this.current_state = get_input_name(cur_current_index);
            }
            this.pending_update = false;
        }
        const p_time = p_playback_info.time;
        const p_seek = p_playback_info.seeked;
        const p_is_external_seeking = p_playback_info.is_external_seeking;
        if (is_zero_approx(p_time) && p_seek && !p_is_external_seeking) {
            clear_remaining_fade = true; // Reset occurs.
        }
        if (cur_transition_request.length > 0) {
            const new_idx = find_input(cur_transition_request);
            if (new_idx >= 0) {
                if (cur_current_index == new_idx) {
                    if (this.allow_transition_to_self) {
                        // Transition to same state.
                        restart = this.input_data[cur_current_index].reset;
                        clear_remaining_fade = true;
                    }
                }
                else {
                    switched = true;
                    cur_prev_index = cur_current_index;
                    this.prev_index = cur_current_index;
                    cur_current_index = new_idx;
                    this.current_index = cur_current_index;
                    this.current_state = cur_transition_request;
                }
            }
            else {
                ERR_PRINT("No such input: '" + cur_transition_request + "'");
            }
            cur_transition_request = '';
            this.transition_request = cur_transition_request;
        }
        if (clear_remaining_fade) {
            cur_prev_xfading = 0;
            this.prev_xfading = 0;
            cur_prev_index = -1;
            this.prev_index = -1;
        }
        let pi = _pi(p_playback_info);
        // Special case for restart.
        if (restart) {
            pi.time = 0;
            pi.seeked = true;
            pi.weight = 1.0;
            return this.blend_input(cur_current_index, pi, FilterAction.FILTER_IGNORE, true);
        }
        if (switched) {
            cur_prev_xfading = this.xfade_time;
        }
        if (cur_current_index < 0 || cur_current_index >= get_input_count() || cur_prev_index >= get_input_count()) {
            return new NodeTimeInfo();
        }
        if (this.sync) {
            pi.weight = 0;
            for (let i = 0; i < get_input_count(); i++) {
                if (i != cur_current_index && i != cur_prev_index) {
                    this.blend_input(i, pi, FilterAction.FILTER_IGNORE, true);
                }
            }
        }
        if (cur_prev_index < 0) { // Process current animation, check for transition.
            pi.weight = 1.0;
            cur_nti = this.blend_input(cur_current_index, pi, FilterAction.FILTER_IGNORE, true);
            if (this.input_data[cur_current_index].auto_advance && is_less_or_equal_approx(cur_nti.get_remain(this.input_data[cur_current_index].break_loop_at_end), this.xfade_time)) {
                this.transition_request = get_input_name((cur_current_index + 1) % get_input_count());
            }
        }
        else { // Cross-fading from prev to current.
            let blend = 0.0;
            let blend_inv = 1.0;
            let use_blend = this.sync;
            if (this.xfade_time > 0) {
                use_blend = true;
                blend = cur_prev_xfading / this.xfade_time;
                /* TODO - Curve Support
                if (this.xfade_curve.is_valid()) {
                  blend = this.xfade_curve->sample(blend);
                }*/
                blend_inv = 1.0 - blend;
                blend = is_zero_approx(blend) ? CMP_EPSILON : blend;
                blend_inv = is_zero_approx(blend_inv) ? CMP_EPSILON : blend_inv;
            }
            // Blend values must be more than CMP_EPSILON to process discrete keys in edge.
            pi.weight = blend_inv;
            if (this.input_data[cur_current_index].reset && !p_seek && switched) { // Just switched, seek to start of current.
                pi.time = 0;
                pi.seeked = true;
            }
            cur_nti = this.blend_input(cur_current_index, pi, FilterAction.FILTER_IGNORE, true);
            pi = _pi(p_playback_info);
            pi.seeked && (pi.seeked = use_blend);
            pi.weight = blend;
            this.blend_input(cur_prev_index, pi, FilterAction.FILTER_IGNORE, true);
            if (!p_seek) {
                if (is_less_or_equal_approx(cur_prev_xfading, 0)) {
                    this.prev_index = -1;
                }
                cur_prev_xfading -= Math.abs(p_playback_info.delta);
            }
        }
        this.prev_xfading = cur_prev_xfading;
        return cur_nti;
    }
}
Transition.registerType('AnimationNodeTransition', Transition);
