import { animation_transition_ease, TrackKeys } from "@phoenixillusion/godot-scene-reader/process/scene/animation.js";
import { Animation } from '../types/gen/index'
import { CLAMP, fposmod, is_equal_approx, is_zero_approx, pingpong, round, signbit } from "../math";

const LOOP_NONE = Animation.LoopMode.LOOP_NONE;
const LOOP_LINEAR = Animation.LoopMode.LOOP_LINEAR;
//const LOOP_PINGPONG = Animation.LoopMode.LOOP_PINGPONG;

const INTERPOLATION_NEAREST = Animation.InterpolationType.INTERPOLATION_NEAREST;
const INTERPOLATION_LINEAR = Animation.InterpolationType.INTERPOLATION_LINEAR;
const INTERPOLATION_CUBIC = Animation.InterpolationType.INTERPOLATION_CUBIC;
const INTERPOLATION_LINEAR_ANGLE = Animation.InterpolationType.INTERPOLATION_LINEAR_ANGLE;
const INTERPOLATION_CUBIC_ANGLE = Animation.InterpolationType.INTERPOLATION_CUBIC_ANGLE;

function _find(times: Float32Array, p_time: number, p_backward: boolean, p_limit: boolean = false) {
  const len = times.length;
	if (len == 0) {
		return -2;
	}

	let low = 0;
	let high = len - 1;
	let middle = 0;

  while (low <= high) {
		middle = Math.floor((low + high) / 2);

		if (is_equal_approx(p_time, times[middle])) { //match
			return middle;
		} else if (p_time < times[middle]) {
			high = middle - 1; //search low end of array
		} else {
			low = middle + 1; //search high end of array
		}
	}
	if (!p_backward) {
		if (times[middle] > p_time) {
			middle--;
		}
	} else {
		if (times[middle] < p_time) {
			middle++;
		}
	}
	if (p_limit) {
		const diff = length - times[middle];
		if ((signbit(times[middle]) && !is_zero_approx(times[middle])) || (signbit(diff) && !is_zero_approx(diff))) {
			return -1;
		}
	}

	return middle;
}

export interface InterpolateFunctions<T> {
	_set(out: T, a: T): T;
  _interpolate(out: T, a: T, b: T, p: number): T;
  _interpolate_angle(out: T, a: T, b: T, p: number): T;
  _cubic_interpolate_in_time(out: T, p_a: T, p_b: T, p_pre_a: T, p_post_b: T, p_weight: number, p_b_t: number, p_pre_a_t: number, p_post_b_t: number): T
  _cubic_interpolate_angle_in_time(out: T, p_a: T, p_b: T, p_pre_a: T, p_post_b: T, p_weight: number, p_b_t: number, p_pre_a_t: number, p_post_b_t: number): T
}

export function _interpolate<T>(out: T, p_keys: TrackKeys, p_time: number, p_interp: Animation.InterpolationType, p_loop_wrap: boolean, p_ok: [boolean], p_backward: boolean,
    loop_mode: Animation.LoopMode, funcs: InterpolateFunctions<T>): T {
	const len = p_keys.times.length; // try to find last key (there may be more past the end)

	if (len <= 0) {
		// (-1 or -2 returned originally) (plus one above)
		// meaning no keys, or only key time is larger than length
		if (p_ok) {
			p_ok[0] = false;
		}
		return {} as T;
	} else if (len == 1) { // one key found (0+1), return it

		if (p_ok) {
			p_ok[0] = true;
		}
		return funcs._set(out, p_keys.values[0]);
	}

  const { times, transitions, values } = p_keys;

	let idx = _find(times, p_time, p_backward);

	//ERR_FAIL_COND_V(idx == -2, T());
	let maxi = len - 1;
	let is_start_edge = p_backward ? idx >= len : idx == -1;
	let is_end_edge = p_backward ? idx == 0 : idx >= maxi;

	let c = 0.0;
	// Prepare for all cases of interpolation.
	let delta = 0.0;
	let from = 0.0;

	let pre = -1;
	let next = -1;
	let post = -1;
	let pre_t = 0.0;
	let to_t = 0.0;
	let post_t = 0.0;

	const use_cubic = p_interp == INTERPOLATION_CUBIC || p_interp == INTERPOLATION_CUBIC_ANGLE;

	if (!p_loop_wrap || loop_mode == LOOP_NONE) {
		if (is_start_edge) {
			idx = p_backward ? maxi : 0;
		}
		next = CLAMP(idx + (p_backward ? -1 : 1), 0, maxi);
		if (use_cubic) {
			pre = CLAMP(idx + (p_backward ? 1 : -1), 0, maxi);
			post = CLAMP(idx + (p_backward ? -2 : 2), 0, maxi);
		}
	} else if (loop_mode == LOOP_LINEAR) {
		if (is_start_edge) {
			idx = p_backward ? 0 : maxi;
		}
		next = fposmod(idx + (p_backward ? -1 : 1), len);
		if (use_cubic) {
			pre = fposmod(idx + (p_backward ? 1 : -1), len);
			post = fposmod(idx + (p_backward ? -2 : 2), len);
		}
		if (is_start_edge) {
			if (!p_backward) {
				let endtime = (length - times[idx]);
				if (endtime < 0) { // may be keys past the end
					endtime = 0;
				}
				delta = endtime + times[next];
				from = endtime + p_time;
			} else {
				let endtime = times[idx];
				if (endtime > length) { // may be keys past the end
					endtime = length;
				}
				delta = endtime + length - times[next];
				from = endtime + length - p_time;
			}
		} else if (is_end_edge) {
			if (!p_backward) {
				delta = (length - times[idx]) + times[next];
				from = p_time - times[idx];
			} else {
				delta = times[idx] + (length - times[next]);
				from = (length - p_time) - (length - times[idx]);
			}
		}
	} else {
		if (is_start_edge) {
			idx = p_backward ? len : -1;
		}
		next = round(pingpong((idx + (p_backward ? -1 : 1)) + 0.5, len) - 0.5);
		if (use_cubic) {
			pre = round(pingpong((idx + (p_backward ? 1 : -1)) + 0.5, len) - 0.5);
			post = round(pingpong((idx + (p_backward ? -2 : 2)) + 0.5, len) - 0.5);
		}
		idx = round(pingpong(idx + 0.5, len) - 0.5);
		if (is_start_edge) {
			if (!p_backward) {
				let endtime = times[idx];
				if (endtime < 0) { // may be keys past the end
					endtime = 0;
				}
				delta = endtime + times[next];
				from = endtime + p_time;
			} else {
				let endtime = length - times[idx];
				if (endtime > length) { // may be keys past the end
					endtime = length;
				}
				delta = endtime + length - times[next];
				from = endtime + length - p_time;
			}
		} else if (is_end_edge) {
			if (!p_backward) {
				delta = length * 2.0 - times[idx] - times[next];
				from = p_time - times[idx];
			} else {
				delta = times[idx] + times[next];
				from = (length - p_time) - (length - times[idx]);
			}
		}
	}

	if (!is_start_edge && !is_end_edge) {
		if (!p_backward) {
			delta = times[next] - times[idx];
			from = p_time - times[idx];
		} else {
			delta = (length - times[next]) - (length - times[idx]);
			from = (length - p_time) - (length - times[idx]);
		}
	}

	if (is_zero_approx(delta)) {
		c = 0;
	} else {
		c = from / delta;
	}

	if (p_ok) {
		p_ok[0] = true;
	}

	const tr = transitions[idx];
	if (tr == 0) {
		// Don't interpolate if not needed.
		return funcs._set(out, values[idx]);
	}

	if (tr != 1.0) {
		c = animation_transition_ease(c, tr);
	}

	switch (p_interp) {
		case INTERPOLATION_NEAREST: {
			return values[idx];
		} break;
		case INTERPOLATION_LINEAR: {
			return funcs._interpolate(out, values[idx], values[next], c);
		} break;
		case INTERPOLATION_LINEAR_ANGLE: {
			return funcs._interpolate_angle(out, values[idx], values[next], c);
		} break;
		case INTERPOLATION_CUBIC:
		case INTERPOLATION_CUBIC_ANGLE: {
			if (!p_loop_wrap || loop_mode == LOOP_NONE) {
				pre_t = times[pre] - times[idx];
				to_t = times[next] - times[idx];
				post_t = times[post] - times[idx];
			} else if (loop_mode == LOOP_LINEAR) {
				pre_t = pre > idx ? -length + times[pre] - times[idx] : times[pre] - times[idx];
				to_t = next < idx ? length + times[next] - times[idx] : times[next] - times[idx];
				post_t = next < idx || post <= idx ? length + times[post] - times[idx] : times[post] - times[idx];
			} else {
				pre_t = times[pre] - times[idx];
				to_t = times[next] - times[idx];
				post_t = times[post] - times[idx];

				if ((pre > idx && idx == next && post < next) || (pre < idx && idx == next && post > next)) {
					pre_t = times[idx] - times[pre];
				} else if (pre == idx) {
					pre_t = idx < next ? -times[idx] * 2.0 : (length - times[idx]) * 2.0;
				}

				if (idx == next) {
					to_t = pre < idx ? (length - times[idx]) * 2.0 : -times[idx] * 2.0;
					post_t = times[next] - times[post] + to_t;
				} else if (next == post) {
					post_t = idx < next ? (length - times[next]) * 2.0 + to_t : -times[next] * 2.0 + to_t;
				}
			}

			if (p_interp == INTERPOLATION_CUBIC_ANGLE) {
				return funcs._cubic_interpolate_angle_in_time(out, 
					values[idx], values[next], values[pre], values[post], c,
					to_t, pre_t, post_t);
			}
			return funcs._cubic_interpolate_in_time(out, 
					values[idx], values[next], values[pre], values[post], c,
					to_t, pre_t, post_t);
		} break;
		default:
			return funcs._set(out, values[idx]);
	}
}