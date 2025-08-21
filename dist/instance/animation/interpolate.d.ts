import { TrackKeys } from "@phoenixillusion/godot-scene-reader/process/scene/animation.js";
import { Animation } from '../types/gen/index.js';
export interface InterpolateFunctions<T> {
    _set(out: T, a: T): T;
    _interpolate(out: T, a: T, b: T, p: number): T;
    _interpolate_angle(out: T, a: T, b: T, p: number): T;
    _cubic_interpolate_in_time(out: T, p_a: T, p_b: T, p_pre_a: T, p_post_b: T, p_weight: number, p_b_t: number, p_pre_a_t: number, p_post_b_t: number): T;
    _cubic_interpolate_angle_in_time(out: T, p_a: T, p_b: T, p_pre_a: T, p_post_b: T, p_weight: number, p_b_t: number, p_pre_a_t: number, p_post_b_t: number): T;
}
export declare function _interpolate<T>(out: T, p_keys: TrackKeys, p_time: number, p_interp: Animation.InterpolationType, p_loop_wrap: boolean, p_ok: [boolean], p_backward: boolean, loop_mode: Animation.LoopMode, funcs: InterpolateFunctions<T>): T;
