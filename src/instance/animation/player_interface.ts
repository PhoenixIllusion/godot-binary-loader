import { AnimationInstance } from '../animation';
import { PlaybackInfo } from './blend';
import { Node } from './node';

export interface AnimationInstanceData {
  animation: AnimationInstance, playback_info: PlaybackInfo, track_weights: Float32Array
}

export interface PlayerInterface {
  configureNode<T extends Node>(node: T): void;
  make_animation_instance(animation: AnimationInstance, p_playback_info: PlaybackInfo, track_weights: Float32Array): void;
}