import { unwrap_property_paths } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";
import { AnimationRootNodeType, AnimationTree } from "./types/gen/index.js";
import { Node } from './animation/node.js';
import { AnimationInstanceData, PlayerInterface } from "./animation/player_interface.js";
import { AnimationInstance } from "./animation.js";
import { allocPlaybackInfo, PlaybackInfo } from "./animation/blend.js";
import { SceneInstance } from "./scene.js";
import { navigate_nodepath, unwrap_properties_cached } from "./util.js";
import { Animation } from "./animation/animation.js";
import { AnimationMixerInstance } from "./animation-mixer.js";
import { DefaultAnimationTree } from "./types/gen/defaults/AnimationTree.default.js";
import { AnimationPlayerInstance } from "./animation-player.js";
import { _blend_process } from "./animation/blend_process.js";
import { is_zero_approx } from "./math.js";

export class AnimationTreeInstance extends AnimationMixerInstance implements PlayerInterface {

  animationPlayer: AnimationPlayerInstance;
  animationPlayerNode: SceneInstance.Node;

  root: Node;

  nodes: Node[] = [];

  constructor(node: SceneInstance.Node) {
    super(node);
    if (node.type != 'AnimationTree') {
      throw new Error("AnimationTreeInstance constructor requires node of type 'AnimationTree'");
    }
    const animationTree = unwrap_properties_cached(node.properties) as AnimationTree;
    DefaultAnimationTree(animationTree);
    Object.assign(this, animationTree);
    const root = animationTree.tree_root as AnimationRootNodeType;
    const { parameters } = unwrap_property_paths(animationTree) as { parameters: Record<string, any> };
    if (root.type == 'AnimationRootNode') {
      throw new Error("Attempted to Create abstract 'Root' node");
    }

    const animationPlayer = navigate_nodepath<SceneInstance.Node>(node, animationTree.anim_player);
    if (animationPlayer == null || animationPlayer.type != 'AnimationPlayer') {
      throw new Error(`Failed to find AnimationPlayer for AnimationTree: [${animationTree.anim_player.names.join(', ')}]`)
    }
    this.animationPlayerNode = animationPlayer;
    this.animationPlayer = new AnimationPlayerInstance(animationPlayer);
    this.animations = this.animationPlayer.animations;

    this.root = Node.create(root, 'root');
    this.root.configure(this);
    this._update_caches();
    this.nodes.forEach(node => this.setupNode(node));
    this.root.parameters(parameters);
  }


  setupNode<T extends Node>(node: T): void {
    node.node_state.track_weights = new Float32Array(this.track_count);
    if (node.filter_enabled) {
      const filter_mask = node.filter_mask = new Float32Array(this.track_count);
      node.filters.forEach(filter => {
        if (this.track_map[filter] == undefined) {
          throw new Error('attempted to filter non-existent node')
        }
        filter_mask[this.track_map[filter]] = 1;
      })
    }
  }

  configureNode<T extends Node>(node: T): void {
    if (node instanceof Animation) {
      node.animationInstance = this.animationPlayer.animations[node.animation];
      if (!this.animation_set.includes(node.animation))
        this.animation_set.push(node.animation);
    }
    this.nodes.push(node);
  }

  make_animation_instance(animation: AnimationInstance, playback_info: PlaybackInfo, track_weights: Float32Array): void {
    for (const w of track_weights) {
      if (!is_zero_approx(w)) {
        this.animation_instances.push({ animation, playback_info, track_weights })
        return;
      }
    }
  }

  apply_animation(animation_instances: AnimationInstanceData[], delta: number) {
    _blend_process(this, animation_instances, delta, false)
  }

  process_animation(delta: number) {
    const pi = allocPlaybackInfo();
    pi.delta = delta;
    this.root.node_state.track_weights.fill(1);
    this.animation_instances.length = 0;
    this.root.process(pi);
    this._blend_init();
    this._blend_calc_total_weight();
    this.apply_animation(this.animation_instances, delta);
    this.animation_instances.length = 0;
  }
}