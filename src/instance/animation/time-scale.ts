import { Node } from './node';
import { PlaybackInfo, NodeTimeInfo, _pi, FilterAction } from "./blend";
import { AnimationNodeTimeScale } from '../types/gen';

export class TimeScale extends Node {
  scale = 1;
  constructor(properties: AnimationNodeTimeScale, name: string) {
    super(properties, name, 'AnimationNodeTimeScale');
  }
  _process(p_playback_info: PlaybackInfo): NodeTimeInfo {
    const cur_scale = this.scale;

    const pi = _pi(p_playback_info);
    pi.weight = 1.0;
    if (!pi.seeked) {
      pi.delta *= cur_scale;
    }

    return this.blend_input(0, pi, FilterAction.FILTER_IGNORE, true);
  }
}
TimeScale.registerType('AnimationNodeTimeScale', TimeScale);
