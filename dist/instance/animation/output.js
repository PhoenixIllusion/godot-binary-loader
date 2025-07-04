import { Node } from './node';
import { _pi, FilterAction } from "./blend";
export class Output extends Node {
    constructor(properties, name) {
        super(properties, name, 'AnimationNodeOutput');
    }
    _process(p_playback_info) {
        const pi = _pi(p_playback_info);
        pi.weight = 1.0;
        return this.blend_input(0, pi, FilterAction.FILTER_IGNORE, true);
    }
}
