import { AnimationInstanceData } from "./player_interface.js";
import { AnimationMixerInstance } from "../animation-mixer.js";
export declare const UPDATE_CONTINUOUS = 0, UPDATE_DISCRETE = 1, UPDATE_CAPTURE = 2;
export declare function _blend_process(mixer: AnimationMixerInstance, animation_instances: AnimationInstanceData[], _p_delta: number, _p_update_only: boolean): void;
