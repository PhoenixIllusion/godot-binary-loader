import { Node } from './node';
import { _pi, FilterAction } from "./blend";
export class TimeScale extends Node {
    constructor(properties, name) {
        super(properties, name, 'AnimationNodeTimeScale');
        this.scale = 1;
    }
    _process(p_playback_info) {
        const cur_scale = this.scale;
        const pi = _pi(p_playback_info);
        pi.weight = 1.0;
        if (!pi.seeked) {
            pi.delta *= cur_scale;
        }
        return this.blend_input(0, pi, FilterAction.FILTER_IGNORE, true);
    }
}
