import { Node } from './node';
import { PlaybackInfo, NodeTimeInfo, _pi, FilterAction } from "./blend";
import { AnimationNodeTimeSeek } from '../types/gen';
import { is_greater_or_equal_approx } from '../math';

export class TimeSeek extends Node {
  seek_pos_request = -1;
  constructor(properties: AnimationNodeTimeSeek, name: string) {
    super(properties, name, 'AnimationNodeTimeSeek');
  }
  _process(p_playback_info: PlaybackInfo): NodeTimeInfo {
    const cur_seek_pos = this.seek_pos_request;
    const pi = _pi(p_playback_info);
    pi.weight = 1.0;
    if (is_greater_or_equal_approx(cur_seek_pos, 0)) {
      pi.time = cur_seek_pos;
      pi.seeked = true;
      pi.is_external_seeking = true;
      this.seek_pos_request = -1.0;
    }

    return this.blend_input(0, pi, FilterAction.FILTER_IGNORE, true);
  }
}
TimeSeek.registerType('AnimationNodeTimeSeek', TimeSeek);
