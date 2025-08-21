import { AnimationInstance } from '../animation.js';
import { PlaybackInfo } from './blend.js';
import { Node } from './node.js';

export interface AnimationInstanceData {
  animation: AnimationInstance, playback_info: PlaybackInfo, track_weights: Float32Array
}

export interface PlayerInterface {
  configureNode<T extends Node>(node: T): void;
  make_animation_instance(animation: AnimationInstance, p_playback_info: PlaybackInfo, track_weights: Float32Array): void;
}