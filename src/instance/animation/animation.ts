import { is_greater_or_equal_approx, is_zero_approx, is_less_approx, is_less_or_equal_approx, is_greater_approx, fposmod, pingpong } from "../math.js";
import { AnimationNodeAnimation, Animation as AnimationT } from "../types/gen/index.js";
import { DefaultAnimationNodeAnimation } from "../types/gen/defaults/AnimationNodeAnimation.default.js";
import { PlaybackInfo, NodeTimeInfo, _pi } from "./blend.js";
import { Node } from './node.js';
import { AnimationInstance } from "../animation.js";

const LOOP_NONE = AnimationT.LoopMode.LOOP_NONE
const LOOP_LINEAR = AnimationT.LoopMode.LOOP_LINEAR
const LOOP_PINGPONG = AnimationT.LoopMode.LOOP_PINGPONG

const PLAY_MODE_FORWARD = AnimationNodeAnimation.PlayMode.PLAY_MODE_FORWARD;
const PLAY_MODE_BACKWARD = AnimationNodeAnimation.PlayMode.PLAY_MODE_BACKWARD;


const LOOPED_FLAG_NONE = AnimationT.LoopedFlag.LOOPED_FLAG_NONE;
const LOOPED_FLAG_END = AnimationT.LoopedFlag.LOOPED_FLAG_END;
const LOOPED_FLAG_START = AnimationT.LoopedFlag.LOOPED_FLAG_START;

export class Animation extends Node {
  animation!: string;
  loop_mode: AnimationT.LoopMode = 0;
  play_mode: AnimationNodeAnimation.PlayMode = PLAY_MODE_FORWARD;
  start_offset: number = 0;
  stretch_time_scale: boolean = false;
  timeline_length: number = 0;
  use_custom_timeline: boolean = false;

  animationInstance!: AnimationInstance;

  constructor(properties: AnimationNodeAnimation, name: string) {
    super(properties, name, 'AnimationNodeAnimation');
    DefaultAnimationNodeAnimation(properties);
    Object.assign(this, properties);
  }


  get_node_time_info() {
    super.get_node_time_info();
    const nti = this._nti;
    if (!this.animationInstance)
      return nti;
    if (this.use_custom_timeline) {
      nti.length = this.timeline_length;
      nti.loop_mode = this.loop_mode;
    } else {
      nti.length = this.animationInstance.length;
      nti.loop_mode = this.animationInstance.loop_mode;
    }
    nti.position = this.current_position;
    return nti;
  }

  _backward = false;
  set_backward(v: boolean): void {
    this._backward = v;
  }
  is_backward(): boolean {
    return this._backward;
  }
  blend_animation(p_playback_info: PlaybackInfo) {
    this.playerInterface.make_animation_instance(this.animationInstance, p_playback_info, this.node_state.track_weights);
  }
  _process(p_playback_info: PlaybackInfo): NodeTimeInfo {

    const anim = this.animationInstance;
    const anim_size = anim.length;

    const cur_nti = this.get_node_time_info();
    const cur_len = cur_nti.length;
    let cur_time = p_playback_info.time;
    let cur_delta = p_playback_info.delta;

    const cur_loop_mode = cur_nti.loop_mode;
    const prev_time = cur_nti.position;

    let looped_flag = LOOPED_FLAG_NONE;
    const node_backward = this.play_mode == PLAY_MODE_BACKWARD;

    // 1. Progress for AnimationNode.
    const will_end = is_greater_or_equal_approx(cur_time + cur_delta, cur_len);
    if (cur_loop_mode != LOOP_NONE) {
      if (cur_loop_mode == LOOP_LINEAR) {
        if (!is_zero_approx(cur_len)) {
          cur_time = fposmod(cur_time, cur_len);
        }
        this._backward = false;
      } else {
        if (!is_zero_approx(cur_len)) {
          if (is_greater_or_equal_approx(prev_time, 0) && is_less_approx(cur_time, 0)) {
            this._backward = !this._backward;
          } else if (is_less_or_equal_approx(prev_time, cur_len) && is_greater_approx(cur_time, cur_len)) {
            this._backward = !this._backward;
          }
          cur_time = pingpong(cur_time, cur_len);
        }
      }
    } else {
      if (is_less_approx(cur_time, 0)) {
        cur_delta += cur_time;
        cur_time = 0;
      } else if (is_greater_approx(cur_time, cur_len)) {
        cur_delta += cur_time - cur_len;
        cur_time = cur_len;
      }
      this._backward = false;
      // If ended, don't progress AnimationNode. So set delta to 0.
      if (!is_zero_approx(cur_delta)) {
        if (this.play_mode == PLAY_MODE_FORWARD) {
          if (is_greater_or_equal_approx(prev_time, cur_len)) {
            cur_delta = 0;
          }
        } else {
          if (is_less_or_equal_approx(prev_time, 0)) {
            cur_delta = 0;
          }
        }
      }
    }

    // 2. For return, store "AnimationNode" time info here, not "Animation" time info as below.
    const nti = new NodeTimeInfo();
    nti.length = cur_len;
    nti.position = cur_time;
    nti.delta = cur_delta;
    nti.loop_mode = cur_loop_mode;
    nti.will_end = will_end;

    // 3. Progress for Animation.
    let prev_playback_time = prev_time + this.start_offset;
    let cur_playback_time = cur_time + this.start_offset;
    if (this.stretch_time_scale) {
      const mlt = anim_size / cur_len;
      prev_playback_time *= mlt;
      cur_playback_time *= mlt;
      cur_delta *= mlt;
    }
    if (cur_loop_mode == LOOP_LINEAR) {
      if (!is_zero_approx(anim_size)) {
        prev_playback_time = fposmod(prev_playback_time, anim_size);
        cur_playback_time = fposmod(cur_playback_time, anim_size);
        if (is_greater_or_equal_approx(prev_playback_time, 0) && is_less_approx(cur_playback_time, 0)) {
          looped_flag = node_backward ? LOOPED_FLAG_END : LOOPED_FLAG_START;
        }
        if (is_less_or_equal_approx(prev_playback_time, anim_size) && is_greater_approx(cur_playback_time, anim_size)) {
          looped_flag = node_backward ? LOOPED_FLAG_START : LOOPED_FLAG_END;
        }
      }
    } else if (cur_loop_mode == LOOP_PINGPONG) {
      if (!is_zero_approx(anim_size)) {
        if (is_greater_or_equal_approx(fposmod(cur_playback_time, anim_size * 2.0), anim_size)) {
          cur_delta = -cur_delta; // Needed for retrieving discrete keys correctly.
        }
        prev_playback_time = pingpong(prev_playback_time, anim_size);
        cur_playback_time = pingpong(cur_playback_time, anim_size);
        if (is_greater_or_equal_approx(prev_playback_time, 0) && is_less_approx(cur_playback_time, 0)) {
          looped_flag = node_backward ? LOOPED_FLAG_END : LOOPED_FLAG_START;
        }
        if (is_less_or_equal_approx(prev_playback_time, anim_size) && is_greater_approx(cur_playback_time, anim_size)) {
          looped_flag = node_backward ? LOOPED_FLAG_START : LOOPED_FLAG_END;
        }
      }
    } else {
      if (is_less_approx(cur_playback_time, 0)) {
        cur_playback_time = 0;
      } else if (is_greater_approx(cur_playback_time, anim_size)) {
        cur_playback_time = anim_size;
      }
    }

    const pi = _pi(p_playback_info);
    pi.start = 0.0;
    pi.end = cur_len;
    if (this.play_mode == PLAY_MODE_FORWARD) {
      pi.time = cur_playback_time;
      pi.delta = cur_delta;
    } else {
      pi.time = anim_size - cur_playback_time;
      pi.delta = -cur_delta;
    }
    pi.weight = 1.0;
    pi.looped_flag = looped_flag;
    this.blend_animation(pi);

    return nti;
  }
}
Animation.registerType('AnimationNodeAnimation', Animation);
