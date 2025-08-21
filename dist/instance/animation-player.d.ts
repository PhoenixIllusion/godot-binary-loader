import { AnimationMixerInstance } from "./animation-mixer.js";
import { SceneInstance } from "./scene.js";
export declare class AnimationPlayerInstance extends AnimationMixerInstance {
    autoplay: string;
    constructor(node: SceneInstance.Node);
}
