import { is_zero_approx } from '../math.js';
import { Node } from './node.js';
import { Animation } from '../types/gen/index.js';

export const _pi = clonePlaybackInfo;

const HUGE_LENGTH = 31540000;

export const enum FilterAction {
  FILTER_IGNORE = 0,
  FILTER_PASS = 1,
  FILTER_STOP = 2,
  FILTER_BLEND = 3,
}

export interface NodeState {
  track_weights: Float32Array
}

export class NodeTimeInfo {
  length = 0.0;
  position = 0.0;
  delta = 0.0;

  // Needs internally to estimate remain time, the previous frame values are not retained.
  loop_mode: Animation.LoopMode = Animation.LoopMode.LOOP_NONE;
  will_end = false; // For breaking loop, it is true when just looped.
  is_infinity = false; // For unpredictable state machine's end.
  is_looping() {
    return this.loop_mode != Animation.LoopMode.LOOP_NONE;
  }
  get_remain(p_break_loop = false): number {
    const { is_infinity, will_end, length, position } = this;
    const is_looping = this.is_looping();
    if ((is_looping && !p_break_loop) || is_infinity) {
      return HUGE_LENGTH;
    }
    if (is_looping && p_break_loop && will_end) {
      return 0;
    }
    const remain = length - position;
    if (is_zero_approx(remain)) {
      return 0;
    }
    return length - position;
  }
}

export function allocPlaybackInfo(): PlaybackInfo {
  return {
    time: 0, delta: 0, start: 0, end: 0, seeked: false, is_external_seeking: false,
    looped_flag: Animation.LoopedFlag.LOOPED_FLAG_NONE, weight: 0
  }
}
export function clonePlaybackInfo(source: PlaybackInfo): PlaybackInfo {
  return Object.assign({}, source);;
}
export interface PlaybackInfo {
  time: number;
  delta: number;
  start: number;
  end: number;
  seeked: boolean;
  is_external_seeking: boolean;
  looped_flag: Animation.LoopedFlag;
  weight: number
}

export function blend_node($this: Node, p_node: Node, p_playback_info: PlaybackInfo, p_filter: FilterAction, p_sync: boolean): NodeTimeInfo {

  const blend_count = $this.node_state.track_weights.length;
  if (p_node.node_state.track_weights.length != blend_count) {
    p_node.node_state.track_weights = new Float32Array(blend_count)
  }
  const blendw = p_node.node_state.track_weights;
  const blendr = $this.node_state.track_weights;

  let any_valid = false;

  const has_filter = $this.filter_mask != null;
  const filter_enabled = $this.filter_enabled;

  if (has_filter && filter_enabled && filter_enabled && p_filter != FilterAction.FILTER_IGNORE) {
    blendw.set($this.filter_mask!)
    switch (p_filter) {
      case FilterAction.FILTER_PASS: {
        // Values filtered pass, the rest don't.
        for (let i = 0; i < blend_count; i++) {
          if (blendw[i] == 0) { // Not filtered, does not pass.
            continue;
          }

          blendw[i] = blendr[i] * p_playback_info.weight;
          if (!is_zero_approx(blendw[i])) {
            any_valid = true;
          }
        }

      } break;
      case FilterAction.FILTER_STOP: {
        // Values filtered don't pass, the rest are blended.

        for (let i = 0; i < blend_count; i++) {
          if (blendw[i] > 0) { // Filtered, does not pass.
            continue;
          }

          blendw[i] = blendr[i] * p_playback_info.weight;
          if (!is_zero_approx(blendw[i])) {
            any_valid = true;
          }
        }

      } break;
      case FilterAction.FILTER_BLEND: {
        // Filtered values are blended, the rest are passed without blending.

        for (let i = 0; i < blend_count; i++) {
          if (blendw[i] == 1.0) {
            blendw[i] = blendr[i] * p_playback_info.weight; // Filtered, blend.
          } else {
            blendw[i] = blendr[i]; // Not filtered, do not blend.
          }

          if (!is_zero_approx(blendw[i])) {
            any_valid = true;
          }
        }

      } break;
    }
  } else {
    for (let i = 0; i < blend_count; i++) {
      // Regular blend.
      blendw[i] = blendr[i] * p_playback_info.weight;
      if (!is_zero_approx(blendw[i])) {
        any_valid = true;
      }
    }
  }
  if (!p_playback_info.seeked && !p_sync && !any_valid) {
    const pi = _pi(p_playback_info);
    pi.delta = 0.0;
    return p_node.process(pi);
  }
  return p_node.process(p_playback_info);
}
