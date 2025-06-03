import { Object3D } from "three/src/core/Object3D.js";
import { AnimationTreeInstance } from "../loader/instance/animation-tree";
import { AnimationMixer } from "three/src/animation/AnimationMixer.js";
import { AnimationAction } from "three/src/animation/AnimationAction.js";
import { AnimationClip } from "three/src/animation/AnimationClip.js";
import { AnimationBlendMode } from "three/src/constants.js";
import { AnimationInstance } from "../loader/instance/animation";
import { PlaybackInfo } from "../loader/instance/animation/blend";
import { Node } from "../loader/instance/animation/node";
import { PlayerInterface } from "../loader/instance/animation/player_interface";
import { SceneInstance } from "../loader/instance/scene";

class AnimationTreeAction extends AnimationAction implements PlayerInterface {
  constructor(
          mixer: AnimationMixer,
          clip: AnimationClip,
          localRoot?: Object3D | null,
          blendMode?: AnimationBlendMode
      ) {
        super(mixer, clip, localRoot, blendMode);
      }
  configureNode<T extends Node>(node: T): void {

  }
  make_animation_instance(animation: AnimationInstance, p_playback_info: PlaybackInfo, track_weights: Float32Array): void {
    throw new Error("Method not implemented.");
  }
}

export class ThreeAnimationTree extends AnimationTreeInstance {
  constructor(node: SceneInstance.Node) {
    super(node);
  }

  getAnimationAction(mixer: AnimationMixer, objectMap: Map<SceneInstance.Node, Object3D>): AnimationTreeAction| null {

    debugger;
    return null; //new AnimationTreeAction(mixer, )
  }
}