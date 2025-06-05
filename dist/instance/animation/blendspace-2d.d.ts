import { AnimationNodeBlendSpace2D } from "../types/gen";
import { Vector2 } from "../types/gen/types";
import { BlendSpace } from "./blendspace";
import { PlaybackInfo, NodeTimeInfo } from "./blend";
import { ReadonlyVec2, vec2 } from 'gl-matrix';
export declare class BlendSpace2D extends BlendSpace<ReadonlyVec2> {
    auto_triangles: boolean;
    blend_mode: AnimationNodeBlendSpace2D.BlendMode;
    x_label: string;
    y_label: string;
    _blend_position: vec2;
    set blend_position(v: Vector2);
    get blend_position(): Vector2;
    _points: Float32Array;
    triangles: Uint32Array;
    closest: number;
    constructor(properties: AnimationNodeBlendSpace2D, name: string);
    _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
