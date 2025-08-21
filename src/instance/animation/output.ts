import { Node } from './node.js';
import { PlaybackInfo, NodeTimeInfo, _pi, FilterAction } from "./blend.js";
import { AnimationNodeOutput } from '../types/gen/index.js';

export class Output extends Node {
  constructor(properties: AnimationNodeOutput, name: string) {
    super(properties, name, 'AnimationNodeOutput');
  }
  _process(p_playback_info: PlaybackInfo): NodeTimeInfo {
    const pi = _pi(p_playback_info);
    pi.weight = 1.0;
    return this.blend_input(0, pi, FilterAction.FILTER_IGNORE, true);
  }
}
Output.registerType('AnimationNodeOutput', Output);