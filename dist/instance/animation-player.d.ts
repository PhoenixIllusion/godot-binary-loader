import { AnimationMixerInstance } from "./animation-mixer";
import { SceneInstance } from "./scene";
export declare class AnimationPlayerInstance extends AnimationMixerInstance {
    autoplay: string;
    constructor(node: SceneInstance.Node);
}
