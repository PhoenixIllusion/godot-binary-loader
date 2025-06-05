import { Node } from './animation/node';
import { AnimationInstanceData, PlayerInterface } from "./animation/player_interface";
import { AnimationInstance } from "./animation";
import { PlaybackInfo } from "./animation/blend";
import { SceneInstance } from "./scene";
import { AnimationMixerInstance } from "./animation-mixer";
import { AnimationPlayerInstance } from "./animation-player";
export declare class AnimationTreeInstance extends AnimationMixerInstance implements PlayerInterface {
    animationPlayer: AnimationPlayerInstance;
    animationPlayerNode: SceneInstance.Node;
    root: Node;
    nodes: Node[];
    constructor(node: SceneInstance.Node);
    setupNode<T extends Node>(node: T): void;
    configureNode<T extends Node>(node: T): void;
    make_animation_instance(animation: AnimationInstance, playback_info: PlaybackInfo, track_weights: Float32Array): void;
    apply_animation(animation_instances: AnimationInstanceData[], delta: number): void;
    process_animation(delta: number): void;
}
