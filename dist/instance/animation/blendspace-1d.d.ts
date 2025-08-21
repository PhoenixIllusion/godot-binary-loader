import { AnimationNodeBlendSpace1D } from "../types/gen/index.js";
import { BlendSpace } from "./blendspace.js";
import { NodeTimeInfo, PlaybackInfo } from "./blend.js";
export declare class BlendSpace1D extends BlendSpace<number> {
    blend_mode: AnimationNodeBlendSpace1D.BlendMode;
    value_label: string;
    blend_position: number;
    closest: number;
    constructor(properties: AnimationNodeBlendSpace1D, name: string);
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
